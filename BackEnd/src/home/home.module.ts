import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { ProgressModule } from 'src/progress/progress.module';
import { UserModule } from 'src/user/user.module';
import { CourseModule } from 'src/course/course.module';

@Module({
  imports: [ProgressModule, UserModule, CourseModule],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
