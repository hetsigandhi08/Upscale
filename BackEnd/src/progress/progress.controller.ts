import { Controller, Get, Post, Request, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { CreateProgressDto } from './dto/create-progress.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FinishVideoDto } from './dto/finish-video.dto';

@ApiTags('Progress')
@ApiBearerAuth()
@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Get()
  findByUser(@Request() req) {
    return this.progressService.findByUser(req.user.userId);
  }

  @Get(':courseId')
  findByCourse(@Request() req, @Param('courseId') courseId: string) {
    return this.progressService.findByCourse(req.user.userId, courseId);
  }

  @Post()
  finishVideo(@Request() req, @Body() finishVideoDto: FinishVideoDto) {
    return this.progressService.finishVideo(req, finishVideoDto);
  }
}
