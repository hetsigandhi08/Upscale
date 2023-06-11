import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type RoadmapDocument = Roadmap & Document;

@Schema()
export class Roadmap {
  @ApiProperty()
  @Prop()
  id: string;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  img: string;
}

export const RoadmapSchema = SchemaFactory.createForClass(Roadmap);
