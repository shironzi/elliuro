import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { PropertyService } from './property.service';
import { Property_Draft } from './property_draft.dto';
import { Property_Publish } from './property_publish.dto';

@Controller('property-listing')
export class PropertyController {
    constructor(private readonly propertyService: PropertyService) { }

    @Get(':id')
    async getProperty(@Param('id') property_id: string) {
        return this.propertyService.getProperty(parseInt(property_id))
    }

    @Post('create')
    async createProperty(@Body() data: Property_Draft) {
        return this.propertyService.createDraft(data)
    }

    @Put('update/:id')
    async updateProperty(@Body() data: Property_Draft, @Param('id') property_id: string) {
        return this.propertyService.update(data, parseInt(property_id))
    }

    @Put('publish')
    async publishProperty(@Body() data: Property_Publish, @Param('id') property_id: number) {
        return this.propertyService.publish(data, property_id)
    }

    @Delete('delete')
    async deleteProperty(@Param('id') property_id: number) {
        return this.propertyService.delete(property_id)
    }

}
