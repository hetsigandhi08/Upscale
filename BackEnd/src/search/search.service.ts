import { Injectable } from '@nestjs/common';
import { Search, SearchDocument } from './schema/search.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SearchService {
  // eslint-disable-next-line prettier/prettier
  constructor(
    @InjectModel(Search.name) private searchModel: Model<SearchDocument>,
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
  ) {}

  findAll() {
    return this.searchModel.find();
  }

  findRecentSearch() {
    return this.searchModel.find().sort({ count: -1 }).limit(10);
  }

  async findOne(search: string) {
    // LIke: name%
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
        addNewSearches.push({ courseName: course.name, count: 1 } as Search);
      }
    });

    if (addNewSearches.length) {
      this.searchModel.create(addNewSearches);
    }

    if (searchModels.length) {
      this.searchModel.updateMany(searchModels);
    }

    return foundCourses;
  }
}
