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
    const progress = await this.findByCourse(req, dto.courseId);
    if (progress) {
      progress.currChapterIdx = dto.chapterIdx;
      progress.currVideoIdx = dto.videoIdx;
      progress.progress = currProgress;
      await this.progressModel.updateOne(progress);
    } else {
      await this.progressModel.create({
        courseId: dto.courseId,
        courseName: course.name,
        currChapterIdx: dto.chapterIdx,
        currVideoIdx: dto.videoIdx,
        progress: currProgress,
      } as Progress);
    }

    return progress;
  }

  findByUser(userId: string): Promise<Progress[]> {
    return this.progressModel.find({ userId: userId });
  }

  findByCourse(userId: string, courseId: any): Promise<Progress> {
    return this.progressModel.findOne({ userId: userId, courseId: courseId });
  }
}
