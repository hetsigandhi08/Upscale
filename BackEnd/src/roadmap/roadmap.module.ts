import { Module } from '@nestjs/common';
import { RoadmapService } from './roadmap.service';
import { RoadmapController } from './roadmap.controller';
import { Roadmap, RoadmapSchema } from './schema/roadmap.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Roadmap.name, schema: RoadmapSchema, collection: 'roadmap' },
    ]),
  ],
  controllers: [RoadmapController],
  providers: [RoadmapService],
})
export class RoadmapModule {}
