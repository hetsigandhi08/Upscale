import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email: email });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: string) {
    return this.userModel.deleteOne({ id });
  }

  async createUser(dto: CreateUserDto) {
    const existedUser = await this.userModel.findOne({ email: dto.email });
    if (existedUser) {
      throw new BadRequestException('User is already existed');
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = await this.userModel.create({ email: dto.email, password: hashedPassword });
    delete user.password;
    return user;
  }
}
