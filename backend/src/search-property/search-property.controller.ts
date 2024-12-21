import { Controller, Get, Param, Query } from '@nestjs/common';
import { SearchPropertyService } from './search-property.service';

@Controller('search')
export class SearchPropertyController {
  constructor(private readonly searchPropertyService: SearchPropertyService) { }

  @Get('')
  async getPropertiesByLocation(@Query('location') location?: string) {
    if (location) {
      return this.searchPropertyService.getPropertyByLocation(location)
    }
    return this.searchPropertyService.getAll()
  }
}
