import { ApiProperty } from '@nestjs/swagger';
import { Course } from 'src/course/schema/course.schema';

export class GetHomeDto {
  @ApiProperty()
  totalProgress: number;

  @ApiProperty()
  learningCourses: HomeCourseProgress[];

  @ApiProperty()
  suggestionCourses: Course[];

  @ApiProperty()
  suggestionChannels: YoutubeChannel[];
}

export class HomeCourseProgress {
  @ApiProperty()
  courseId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  progress: number;
}

export class YoutubeChannel {
  @ApiProperty()
  url: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  img: string;
}
