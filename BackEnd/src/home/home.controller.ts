import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { HomeService } from './home.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetHomeDto } from './dto/get-home.dto';

@ApiTags('Home')
@ApiBearerAuth()
@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  async findAll(@Request() req): Promise<GetHomeDto> {
    return this.homeService.getHome(req);
  }
}
