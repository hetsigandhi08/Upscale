import { Injectable } from '@nestjs/common';
import { Search, SearchDocument } from './schema/search.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Course, CourseDocument } from 'src/course/schema/course.schema';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Search.name) private searchModel: Model<SearchDocument>,
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
  ) {}

  findAll() {
    return this.searchModel.find();
  }

  findRecentSearch() {
    return this.searchModel.find().sort({ count: -1 }).limit(5);
  }

  async findOne(search: string) {
    // Like: name%
    const foundCourses = await this.courseModel.find({
      name: { $regex: search + '.*', $options: 'i' },
    });
    const searchModels = await this.searchModel.find({
      courseName: { $in: foundCourses.map((c) => c.name) },
    });
    const addNewSearches: Search[] = [];
    foundCourses.forEach((course) => {
      const searchModel = searchModels.find((model) => model.courseName == course.name);
      if (searchModel) {
        searchModel.count++;
      } else {

        addNewSearches.push({
          courseId: course['_id'],
          courseName: course.name,
          count: 1,
          courseImg: course.img,
        } as Search);

      }
    });

    if (addNewSearches.length) {
      this.searchModel.create(addNewSearches);
    }

    if (searchModels.length) {
      searchModels.forEach((s) => {
        this.searchModel.findByIdAndUpdate(s.id, { count: s.count });
      });
    }

    return foundCourses;
  }
}
