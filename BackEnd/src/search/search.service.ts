import { Injectable } from '@nestjs/common';
import { Search, SearchDocument } from './schema/search.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SearchService {
  constructor(@InjectModel(Search.name) private searchModel: Model<SearchDocument>) {}

  findAll() {
    return this.searchModel.find();
  }

  findOne(name: string) {
    return this.searchModel.find().all.name.match(name);
  }
}
