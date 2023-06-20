import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterController } from './chapter.controller';
import { Chapter, ChapterSchema } from './schema/chapter.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Chapter.name, schema: ChapterSchema }])],
  controllers: [ChapterController],
  providers: [ChapterService],
})
export class ChapterModule {}
