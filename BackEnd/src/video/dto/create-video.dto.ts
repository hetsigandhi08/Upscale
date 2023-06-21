import { ApiProperty } from '@nestjs/swagger';

export class CreateVideoDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  img: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  chapterId: string;
}
