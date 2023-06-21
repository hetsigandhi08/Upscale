import { Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { Template, TemplateDocument } from './schema/template.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TemplateService {
  constructor(@InjectModel(Template.name) private templateModel: Model<TemplateDocument>) {}

  create(createTemplateDto: CreateTemplateDto) {
    return this.templateModel.create(createTemplateDto);
  }

  findAll() {
    return this.templateModel.find();
  }

  findOne(id: string) {
    return this.templateModel.findById(id);
  }

  update(id: string, updateTemplateDto: UpdateTemplateDto) {
    return this.templateModel.findOneAndUpdate({ id }, updateTemplateDto);
  }

  remove(id: string) {
    return this.templateModel.deleteOne({ id });
  }
}
