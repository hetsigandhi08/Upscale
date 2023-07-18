/* eslint-disable no-var */
/* eslint-disable prettier/prettier */

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ForgetPasswordService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly mailService: MailerService,
  ) {}

  async sendEmailForgotPassword(email: string) {
    // eslint-disable-next-line no-var
    var userFromDb = await this.userModel.findOne({ email: email });
    if (!userFromDb)
      throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);

    var newPasswordToken = (Math.floor(Math.random() * 900000) + 100000)
      .toString;

    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'asesummer2023@gmail.com',
        pass: 'hzxfwwgwalkjfftz',
      },
    });
    const sendEmail = (email, token) => {
      const mailOptions = {
        from: 'asesummer2023@gmail.com',
        to: email,
        subject: 'Forgot Password',
        text: 'Forgot Password',
        html:
          'Hi! <br><br> If you have requested to reset your password<br><br>' +
          'Your Reset OTP is ' +
          newPasswordToken,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log('Error in sending email  ' + error);
          return true;
        } else {
          console.log('Email sent: ' + info.response);
          return false;
        }
      });
    };

    // this.mailService.sendMail({
    //   from: 'gandhi58@uwindsor.ca',
    //   to: email,
    //   subject: 'Forgot Password',
    //   text: 'Forgot Password',
    //   html:
    //     'Hi! <br><br> If you have requested to reset your password<br><br>' +
    //     'Your Reset OTP is ' +
    //     newPasswordToken,
    // });
    return true;
  }
}
