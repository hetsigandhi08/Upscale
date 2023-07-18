import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

 
























































































































































  

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(id);
  // }

  // @Post('logout')
  // @HttpCode(HttpStatus.OK)
  // userLogin(@Body() userLogout: UserLogoutDto) {
  //   return this.authService.logout(userLogout);
  // }

  // @Post('change-password')
  // changePassword(@Body() userChangePasswordDto: UserChangePasswordDto) {
  //   return this.authService.changePassword(userChangePasswordDto);
  // }
}
