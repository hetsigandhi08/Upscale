import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { SearchService } from './search.service';

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { SearchDto } from './dto/search.dto';

@ApiTags('Search')
@ApiBearerAuth()
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('recent')
  findRecentSearch() {
    return this.searchService.findRecentSearch();
  }

  // @Get(':name')
  // findOne(@Param('name') name: string) {
  //   return this.searchService.findOne(name);
  // }

  @HttpCode(HttpStatus.OK)
  @Post()
  search(@Body() dto: SearchDto) {
    return this.searchService.findOne(dto.keyword);
  }
}
