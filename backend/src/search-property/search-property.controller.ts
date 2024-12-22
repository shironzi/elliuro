import { Controller, Get, Param, Query } from '@nestjs/common';
import { SearchPropertyService } from './search-property.service';

@Controller('search')
export class SearchPropertyController {
  constructor(private readonly searchPropertyService: SearchPropertyService) { }

  @Get('')
  async getPropertiesByLocation(@Query('location') location?: string, @Query('propertyType') propertyType?: string) {
    if (location) {
      return this.searchPropertyService.getPropertyByLocation(location)
    } else if (propertyType) {
      return this.searchPropertyService.getPropertyByPropertyType(propertyType)
    }
    return this.searchPropertyService.getAll()
  }
}
