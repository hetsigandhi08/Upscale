import { BadRequestException, Injectable } from '@nestjs/common';
import { Progress, ProgressDocument } from './schema/progress.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FinishVideoDto } from './dto/finish-video.dto';
import { Course } from 'src/course/schema/course.schema';

@Injectable()
export class ProgressService {
  constructor(
    @InjectModel(Progress.name) private progressModel: Model<ProgressDocument>,
    @InjectModel(Course.name) private courseModel: Model<Course>,
  ) {}

  async finishVideo(req: any, dto: FinishVideoDto): Promise<Progress> {
    const course = await this.courseModel.findById(dto.courseId);

    let totalVideos = 0;
    course.chapters.forEach((chapter) => (totalVideos += chapter.videos.length));

    if (totalVideos <= 0) {
      throw new BadRequestException('EMPTY_VIDEOS');
    }

    if (dto.chapterIdx >= course.chapters.length) {
      throw new BadRequestException('Chapter index invalid');
    }

    if (dto.videoIdx >= course.chapters[dto.chapterIdx].videos.length) {
      throw new BadRequestException('Video index invalid');
    }

    let currTotalVideo = 0;
    for (let i = 0; i <= dto.chapterIdx; i++) {
      let currChapter = course.chapters[i];
      for (let j = 0; j < currChapter.videos.length; j++) {
        currTotalVideo += 1;
        if (i == dto.chapterIdx && j == dto.videoIdx) {
          break;
        }
      }
    }

    const currProgress = Math.floor((currTotalVideo / totalVideos) * 100);
    let progress = await this.findByCourse(req.user.userId, dto.courseId);
    if (progress) {
      await this.progressModel.findOneAndUpdate(
        { id: progress.id },
        {
          currChapterIdx: dto.chapterIdx,
          currVideoIdx: dto.videoIdx,
          progress: currProgress,
        },
      );
    } else {
      progress = {
        courseId: dto.courseId,
        courseName: course.name,
        currChapterIdx: dto.chapterIdx,
        currVideoIdx: dto.videoIdx,
        progress: currProgress,
        userId: req.user.userId,
      } as Progress;
      await this.progressModel.create(progress);
    }

    return progress;
  }

  findByUser(userId: string): Promise<Progress[]> {
    return this.progressModel.find({ userId: userId });
  }

  findByCourse(userId: string, courseId: string): Promise<Progress> {
    return this.progressModel.findOne({ userId: userId, courseId: courseId });
  }
}
