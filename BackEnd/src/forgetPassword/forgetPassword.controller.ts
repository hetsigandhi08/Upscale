/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { ForgetPasswordService } from './forgetPassword.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('ForgotPassword')
@ApiBearerAuth()
@Controller('forgotPassword')
export class ForgetPasswordController {
  constructor(private readonly forgetPasswordService: ForgetPasswordService) {}

  @Get(':email')
  public async sendEmailForgotPassword(@Param('email') email: string) {
    try {
      var isEmailSent =
        await this.forgetPasswordService.sendEmailForgotPassword(email);

      if (isEmailSent) {
        throw new BadRequestException('Login.Email_Resent', null);
      } else {
        throw new BadRequestException('REGISTRATION.ERROR.MAIL_NOT_SENT');
      }
    } catch (error) {
      throw new BadRequestException('LOGIN.ERROR.SEND_EMAIL', error);
    }
  }
}
