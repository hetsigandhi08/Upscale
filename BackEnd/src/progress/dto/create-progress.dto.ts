import { ApiProperty } from '@nestjs/swagger';

export class CreateProgressDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  courseId: string;

  @ApiProperty()
  currentChaprerId: string;

  @ApiProperty()
  currentVideoId: string;

  @ApiProperty()
  progress: number;
}
