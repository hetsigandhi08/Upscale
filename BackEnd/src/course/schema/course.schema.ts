import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { CourseTag } from 'src/common/CourseTag';

export type CourseDocument = Course & Document;

@Schema()
export class Course {
  @ApiProperty()
  @Prop()
  id: string;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  img: string;

  @ApiProperty()
  @Prop()
  tags: CourseTag[];

  @ApiProperty()
  @Prop()
  chapters: CourseChapter[];
}

export class CourseChapter {
  @ApiProperty()
  @Prop()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  videos: ChapterVideo[];
}

export class ChapterVideo {
  @ApiProperty()
  @Prop()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  duration: string;

  @ApiProperty()
  channel: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
