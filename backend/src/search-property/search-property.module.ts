import { Module } from '@nestjs/common';
import { SearchPropertyService } from './search-property.service';
import { SearchPropertyController } from './search-property.controller';

@Module({
  controllers: [SearchPropertyController],
  providers: [SearchPropertyService],
})
export class SearchPropertyModule {}
