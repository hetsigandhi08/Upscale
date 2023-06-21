import { ApiProperty } from '@nestjs/swagger';

export class CreateTemplateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  img: string;
}
