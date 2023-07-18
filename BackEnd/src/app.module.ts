import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SearchModule } from './search/search.module';
import { HomeModule } from './home/home.module';
import { ProgressModule } from './progress/progress.module';
import { MailerModule } from '@nestjs-modules/mailer/dist';
import { ForgetPasswordModule } from './forgetPassword/forgetPassword.module';

require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECTION_URI),
    CourseModule,
    UserModule,
    AuthModule,
    SearchModule,
    HomeModule,
    ProgressModule,
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'asesummer2023@gmail.com',
          pass: 'hzxfwwgwalkjfftz',
        },
      },
    }),
    ForgetPasswordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
