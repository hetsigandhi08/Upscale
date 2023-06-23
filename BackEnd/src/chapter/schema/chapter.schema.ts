import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ChapterDocument = Chapter & Document;

@Schema()
export class Chapter {
  @ApiProperty()
  @Prop()
  id: string;

  @ApiProperty()
  @Prop()
  courseId: string;

  @ApiProperty()
  @Prop()
  name: string;
}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);