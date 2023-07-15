import { Inject, Injectable } from '@nestjs/common';
import { GetHomeDto, HomeCourseProgress } from './dto/get-home.dto';
import { ProgressService } from 'src/progress/progress.service';
import { UserService } from 'src/user/user.service';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class HomeService {
  constructor(
    private progressService: ProgressService,
    private userService: UserService,
    private courseService: CourseService,
  ) {}

  async getHome(req: any): Promise<GetHomeDto> {
    const progresses = await this.progressService.findByUser(req.user.userId);

    let totalProgress = 0;
    if (progresses.length > 0) {
      let sumProgress = 0;
      progresses.forEach((progress) => (sumProgress += progress.progress));
      totalProgress = Math.floor(sumProgress / progresses.length);
    }

    const user = await this.userService.findOne(req.user.userId);
    const coursesWithTags = await this.courseService.findByTags(user.tags);
    if (coursesWithTags.length < 5) {
      const courseWithTagIds = coursesWithTags.map((c) => c.id);
      const otherCourses = await this.courseService.getOtherCourses(courseWithTagIds);
      let otherCourseId = 0;
      for (let i = coursesWithTags.length; i < 5; i++) {
        coursesWithTags.push(otherCourses[otherCourseId]);
        otherCourseId++;
        if (otherCourseId >= otherCourses.length) {
          break;
        }
      }
    }

    const res = {
      totalProgress: totalProgress ?? 0,
      learningCourses: progresses.map((progress) => {
        return {
          courseId: progress.courseId,
          progress: progress.progress,
          name: progress.courseName,
        } as HomeCourseProgress;
      }),
      suggestionCourses: coursesWithTags,
      suggestionChannels: [
        {
          url: 'https://www.youtube.com/@TheCodingTrain',
          name: 'The Coding Train',
          img: 'https://yt3.googleusercontent.com/99wepc_FTSN0n_GbR-FlFANyxed7TsbE8WxKIDWftdxssZlYo1-gW1CRD7cPgOzThMM8m4W8=s176-c-k-c0x00ffffff-no-rj',
        },
        {
          url: 'https://www.youtube.com/@nesoacademy',
          name: 'Neso Academy',
          img: 'https://yt3.googleusercontent.com/ytc/AGIKgqPFTcn4WM7taeb7n7ZLfjNR9JMibWOTox3KPIaU=s176-c-k-c0x00ffffff-no-rj',
        },
        {
          url: 'https://www.youtube.com/watch?v=YAdLFsTG70w',
          name: `Jenny's Lectures CS IT`,
          img: 'https://yt3.googleusercontent.com/W9ySfNFEzjhBPkGKB7VCjxPhtOz8uT4k0OFij6Du8E4JzcE_Xp9knl75HlBGFKB8LUvdvEQVPA=s176-c-k-c0x00ffffff-no-rj',
        },
      ],
    } as GetHomeDto;
    return res;
  }
}
