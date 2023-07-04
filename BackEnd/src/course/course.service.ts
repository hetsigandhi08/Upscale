import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course, CourseDocument } from './schema/course.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CourseTag } from 'src/common/CourseTag';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>) {}

  create(createCourseDto: CreateCourseDto) {
    return this.courseModel.create(createCourseDto);
  }

  findAll() {
    return this.courseModel.find();
  }

  findByTags(tags: CourseTag[]): Promise<Course[]> {
    return this.courseModel.find({ tags: { $in: tags } });
  }

  getOtherCourses(courseWithTagIds: string[]): Promise<Course[]> {
    return this.courseModel.find({ id: { $nin: courseWithTagIds } });
  }

  findOne(id: string) {
    return this.courseModel.findById(id);
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.courseModel.findOneAndUpdate({ id }, updateCourseDto);
  }

  remove(id: string) {
    return this.courseModel.deleteOne({ id });
  }
}
