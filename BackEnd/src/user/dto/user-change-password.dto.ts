import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class UserChangePasswordDto {
  @IsString()
  @IsEmail()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @ApiProperty()
  readonly password: string;

  @IsString()
  @ApiProperty()
  readonly newPassword: string;
}
