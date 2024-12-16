import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyDraftDto } from './property_draft.dto';
import { PropertyPublishDto } from './property_publish.dto';

@Controller('property-listing')
export class PropertyController {
    constructor(private readonly propertyService: PropertyService) { }


    /**
     * 
     * @returns all property created by user
     */
    @Get()
    async getAllProperty() {
        return this.propertyService.getPropertyAll()
    }

    /**
     * 
     * @param property_id 
     * @returns property id that equals to property_id
     */

    @Get(':id')
    async getProperty(@Param('id') property_id: string) {
        return this.propertyService.getPropertyById(parseInt(property_id))
    }

    @Post('create')
    async createProperty(@Body() data: PropertyDraftDto) {
        return this.propertyService.createDraft(data)
    }

    @Put('update/:id')
    async updateProperty(@Body() data: PropertyDraftDto, @Param('id') property_id: string) {
        return this.propertyService.update(data, parseInt(property_id))
    }

    @Put('publish/:id')
    async publishProperty(@Body() data: PropertyPublishDto, @Param('id') property_id: string) {
        return this.propertyService.publish(data, parseInt(property_id))
    }

    // @Delete('delete/:id')
    // async deleteProperty(@Param('id') propertyId: string) {
    //     return this.propertyService.delete(parseInt(propertyId))
    // }

}
