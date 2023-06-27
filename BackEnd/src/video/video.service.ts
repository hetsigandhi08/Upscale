import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Video, VideoDocument } from './schema/video.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class VideoService {
  constructor(@InjectModel(Video.name) private videoModel: Model<VideoDocument>) {}

  create(createVideoDto: CreateVideoDto) {
    return this.videoModel.create(createVideoDto);
  }

  findAll() {
    return this.videoModel.find();
  }

  findOne(id: string) {
    return this.videoModel.findById(id);
  }

  update(id: string, updateVideoDto: UpdateVideoDto) {
    return this.videoModel.findOneAndUpdate({ id }, updateVideoDto);
  }

  remove(id: string) {
    return this.videoModel.deleteOne({ id });
  }
}
