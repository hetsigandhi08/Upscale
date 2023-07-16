import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/schema/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.verfifyUser(email, pass);
    const payload = { userId: user['_id'] };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async verfifyUser(email: string, pass: string): Promise<User> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('User not exist');
    }

    const isPasswordMatching = await bcrypt.compare(pass, user.password);
    if (!isPasswordMatching) {
      throw new BadRequestException('Password not correct');
    }
    return user;
  }

  async register(dto: UserRegisterDto) {
    return await this.userService.createUser({
      email: dto.email,
      password: dto.password,
    });
  }
}
