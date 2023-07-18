import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type SearchDocument = Search & Document;

@Schema()
export class Search {
  @ApiProperty()
  @Prop()
  courseName: string;

  @ApiProperty()
  @Prop()
  courseId: string;

  @ApiProperty()
  @Prop()
  count: number;

  @ApiProperty()
  @Prop()
  courseImg: string;

}

export const SearchSchema = SchemaFactory.createForClass(Search);
