/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { User, UserSchema } from 'src/user/schema/user.schema';

export type ForgetPasswordDocument = User & Document;

@Schema()
export class ForgetPassword {
  @ApiProperty()
  @Prop()
  email: string;

  @ApiProperty()
  @Prop()
  password: string;
}

export const ForgetPasswordSchema =
  SchemaFactory.createForClass(ForgetPassword);
export { User };
export { UserSchema };
