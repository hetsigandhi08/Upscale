import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from './search.service';

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Search')
@ApiBearerAuth()
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  // @Get()
  // findAll() {
  //   return this.searchService.findAll();
  // }

  @Get('recent')
  findRecentSearch() {
    return this.searchService.findRecentSearch();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.searchService.findOne(name);
  }


}
