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





















































































  

    const currProgress = Math.floor((currTotalVideo / totalVideos) * 100);
    let progress = await this.findByCourse(req.user.userId, dto.courseId);
    if (progress) {
      await this.progressModel.findOneAndUpdate({id: progress.id}, {
        currChapterIdx: dto.chapterIdx,
        currVideoIdx: dto.videoIdx,
        progress: currProgress
      })
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
