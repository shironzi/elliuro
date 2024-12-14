import { Controller, Post } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
    constructor(private readonly propertyService: PropertyService) { }

    // Accept incomplete data and save the property with a status of `'draft'`.

    @Post('create')
    async createProperty() {

    }

}
