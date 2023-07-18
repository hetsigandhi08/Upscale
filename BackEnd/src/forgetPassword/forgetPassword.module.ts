/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ForgetPasswordService } from './forgetPassword.service';
import { ForgetPasswordController } from './forgetPassword.controller';
import { User, UserSchema } from './schema/forgetPassword.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [ForgetPasswordController],
  providers: [ForgetPasswordService],
  exports: [ForgetPasswordService],
})
export class ForgetPasswordModule {}
