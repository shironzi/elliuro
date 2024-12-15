import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Property_Publish } from './property_publish.dto';
import { ValidatePublishData } from './property.decorator';
import { PropertyDraftDto } from './property_draft.dto';

enum Property_type {
    HOUSE = "HOUSE",
    APARTMENT = "APARTMENT",
    HOTEL = "HOTEL",
    CONDOMINIUM = "CONDOMINIUM",
    PRIVATE = "PRIVATE",
}

@Injectable()
export class PropertyService {
    constructor(private prisma: PrismaService) { }

    async getProperty(property_id: number) {

    }

    async createDraft(data: PropertyDraftDto) {

    }

    async update(data: PropertyDraftDto, property_id: number) {

    }


    async publish(@ValidatePublishData() data: Property_Publish, propert_id: number) {

    }

    async delete(property_id: number) {

    }
}

