import { ApiProperty } from '@nestjs/swagger';

export class CreateRoadmapDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  img: string;
}
