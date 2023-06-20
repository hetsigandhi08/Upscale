import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ChapterModule } from './chapter/chapter.module';
require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_CONNECTION_URI), CourseModule, ChapterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
