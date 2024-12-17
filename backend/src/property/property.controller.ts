import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyPublishDto } from './property_publish.dto';
import { PropertyAmenityDto, PropertyDetailsDto, PropertyImageDto } from './property_draft.dto';

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

    @Post('initialProperty')
    async createInitialProperty() {
        return this.propertyService.createIntialProperty()
    }

    // @Put('details/:id')
    // async upsertPropertyDetails(@Body() data: { title: string, type: PropertyType, location: string, price: number, description: string }, @Param('id') propertyId: string) {
    //     const convertedData = { ...data, type: data.type as PropertyType };
    //     return this.propertyService.upsertPropertyDetails(convertedData, parseInt(propertyId))
    // }

    @Put('details/:id')
    async upsertPropertyDetails(@Body() data: PropertyDetailsDto, @Param('id') propertyId: string) {
        return this.propertyService.upsertPropertyDetails(data, parseInt(propertyId))
    }

    @Put('amenities/:id')
    async upsertPropertyAmenities(@Body() data: PropertyAmenityDto[], @Param('id') propertyId: string) {
        return this.propertyService.upsertPropertyAmenities(data, parseInt(propertyId))
    }

    @Put('images/:id')
    async upsertPropertyImages(@Body() data: PropertyImageDto[], @Param('id') propertyId: string) {
        return this.propertyService.upsertPropertyImages(data, parseInt(propertyId))
    }

    @Put('publish/:id')
    async publishProperty(@Body() data: PropertyPublishDto, @Param('id') propertyId: string) {
        return this.propertyService.publishProperty(data, parseInt(propertyId))
    }

    @Delete('delete/:id')
    async deleteProperty(@Param('id') propertyId: string) {
        return this.propertyService.deleteProperty(parseInt(propertyId))
    }

}
