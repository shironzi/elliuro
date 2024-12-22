import { Controller, Get, Param, Query } from '@nestjs/common';
import { SearchPropertyService } from './search-property.service';

@Controller('search')
export class SearchPropertyController {
  constructor(private readonly searchPropertyService: SearchPropertyService) { }

  @Get('')
  async getProperties(
    @Query('location') location?: string,
    @Query('propertyType') propertyType?: string,
    @Query('priceMin') priceMin?: string,
    @Query('priceMax') priceMax?: string
  ) {
    const query = {
      location,
      propertyType,
      priceMin: priceMin ? parseFloat(priceMin) : undefined,
      priceMax: priceMax ? parseFloat(priceMax) : undefined,
    };

    return this.searchPropertyService.searchProperties(query);
  }
}
