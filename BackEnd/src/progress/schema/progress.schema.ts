import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ProgressDocument = Progress & Document;

@Schema()
export class Progress {
  @ApiProperty()
  @Prop()
  id: string;

  @ApiProperty()
  @Prop()
  userId: string;

  @ApiProperty()
  @Prop()
  courseId: string;

  @ApiProperty()
  @Prop()
  courseName: string;

  @ApiProperty()
  @Prop()
  currChapterIdx: number;

  @ApiProperty()
  @Prop()
  currVideoIdx: number;

  @ApiProperty()
  @Prop()
  progress: number;
}

export const ProgressSchema = SchemaFactory.createForClass(Progress);
