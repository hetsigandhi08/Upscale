import { ApiProperty } from '@nestjs/swagger';

export class FinishVideoDto {
  @ApiProperty()
  courseId: string;

  @ApiProperty()
  chapterIdx: number;

  @ApiProperty()
  videoIdx: number;
}
