/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CreateForgetPasswordDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
