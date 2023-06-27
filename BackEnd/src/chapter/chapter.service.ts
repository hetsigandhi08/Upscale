import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { Chapter, ChapterDocument } from './schema/chapter.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ChapterService {
  constructor(@InjectModel(Chapter.name) private chapterModel: Model<ChapterDocument>) {}

  create(createChapterDto: CreateChapterDto) {
    return this.chapterModel.create(createChapterDto);
  }

  findAll() {
    return this.chapterModel.find();
  }

  findOne(id: string) {
    return this.chapterModel.findById(id);
  }

  update(id: string, updateChapterDto: UpdateChapterDto) {
    return this.chapterModel.findOneAndUpdate({ id }, updateChapterDto);
  }

  remove(id: string) {
    return this.chapterModel.deleteOne({ id });
  }
}
