import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserLogoutDto {
  @ApiProperty()
  readonly userId: number;

  @IsString()
  @ApiProperty()
  readonly deviceToken: string;
}
