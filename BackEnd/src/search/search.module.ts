import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { Search, SearchSchema } from './schema/search.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from 'src/course/schema/course.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Search.name, schema: SearchSchema },
      { name: Course.name, schema: CourseSchema }
    ]),
  ],
  controllers: [SearchController],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
