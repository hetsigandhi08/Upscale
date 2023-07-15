import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  img: string;

  @ApiProperty()
  chapters: CourseChapter[];
}

export class CourseChapter {
  @ApiProperty()
  name: string;

  @ApiProperty()
  courseId: string;
}

export class ChapterVideo {
  @ApiProperty()
  name: string;

  @ApiProperty()
  img: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  chapterId: string;
}
