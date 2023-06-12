import { Injectable } from '@nestjs/common';
import { CreateRoadmapDto } from './dto/create-roadmap.dto';
import { UpdateRoadmapDto } from './dto/update-roadmap.dto';
import { Roadmap, RoadmapDocument } from './schema/roadmap.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RoadmapService {
  constructor(@InjectModel(Roadmap.name) private roadmapModel: Model<RoadmapDocument>) {}

  create(createRoadmapDto: CreateRoadmapDto) {
    return this.roadmapModel.create(createRoadmapDto);
  }

  findAll() {
    return this.roadmapModel.find();
  }

  findOne(id: string) {
    return this.roadmapModel.findById(id);
  }

  update(id: string, updateRoadmapDto: UpdateRoadmapDto) {
    return this.roadmapModel.findOneAndUpdate({ id }, updateRoadmapDto);
  }

  remove(id: string) {
    return this.roadmapModel.deleteOne({ id });
  }
}
