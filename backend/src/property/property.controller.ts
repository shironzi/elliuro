import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFiles, UseInterceptors, UsePipes } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyPublishDto } from './property_publish.dto';
import { FilesUploadDto, PropertyAmenityDto, PropertyDetailsDto } from './property_draft.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

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

    @Get(':propertyId')
    async getProperty(@Param('propertyId') property_id: string) {
        return this.propertyService.getPropertyById(parseInt(property_id))
    }

    @Post('initialProperty')
    async createInitialProperty() {
        return this.propertyService.createIntialProperty()
    }

    @Get('details/:propertyId')
    async getPropertyDetails(@Param('propertyId') propertyId: string) {
        return this.propertyService.getPropertyDetails(parseInt(propertyId))
    }

    @Put('details/:propertyId')
    async upsertPropertyDetails(@Body() data: PropertyDetailsDto, @Param('propertyId') propertyId: string) {
        return this.propertyService.upsertPropertyDetails(data, parseInt(propertyId))
    }

    @Get('amenities/:propertyId')
    async getPropertyAmenities(@Param('propertyId') propertyId: string) {
        return this.propertyService.getPropertyAmenities(parseInt(propertyId))
    }

    @Put('amenities/:propertyId')
    async upsertPropertyAmenities(@Body() data: PropertyAmenityDto[], @Param('propertyId') propertyId: string) {
        return this.propertyService.upsertPropertyAmenities(data, parseInt(propertyId))
    }

    @Get('images/:propertyId')
    async getPropertyImages(@Param('propertyId') propertyId: string) {
        return this.propertyService.getPropertyImages(parseInt(propertyId));
    }

    @Put('images/:propertyId')
    @UseInterceptors(FilesInterceptor('images'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'List of files to upload',
        type: FilesUploadDto,
    })
    async uploadFiles(@UploadedFiles() files: Express.Multer.File[], @Param('propertyId') propertyId: string) {
        return this.propertyService.upsertPropertyImages(files, parseInt(propertyId));
    }

    @Put('publish/:propertyId')
    async publishProperty(@Body() data: PropertyPublishDto, @Param('propertyId') propertyId: string) {
        return this.propertyService.publishProperty(data, parseInt(propertyId))
    }

    @Delete('delete/:propertyId')
    async deleteProperty(@Param('propertyId') propertyId: string) {
        return this.propertyService.deleteProperty(parseInt(propertyId))
    }

}
