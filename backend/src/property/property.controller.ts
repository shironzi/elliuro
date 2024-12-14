import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { PropertyService } from './property.service';
import { Property_Draft } from './property_draft.dto';
import { Property_Publish } from './property_publish.dto';

@Controller('property')
export class PropertyController {
    constructor(private readonly propertyService: PropertyService) { }

    // Accept incomplete data and save the property with a status of `'draft'`.

    @Post('create')
    async createProperty(@Body() data: Property_Draft) {
        return this.propertyService.createDraft(data)
    }

    @Put('update')
    async updateProperty(@Body() data: Property_Draft, property_id: number) {
        return this.propertyService.update(data, property_id)
    }

    @Put('publish')
    async publishProperty(@Body() data: Property_Publish, property_id: number) {
        return this.propertyService.publish(data, property_id)
    }

    @Delete('delete')
    async deleteProperty(property_id: number) {
        return this.propertyService.delete(property_id)
    }

}
