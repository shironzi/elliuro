import { Controller, Get } from '@nestjs/common';
import { SearchPropertyService } from './search-property.service';

@Controller('search')
export class SearchPropertyController {
  constructor(private readonly searchPropertyService: SearchPropertyService) { }

  @Get('')
  async getAllProperties() {
    return this.searchPropertyService.getAll()
  }
}
