import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type SearchDocument = Search & Document;

@Schema()
export class Search {
  @ApiProperty()
  @Prop()
  name: string;
}

export const SearchSchema = SchemaFactory.createForClass(Search);
