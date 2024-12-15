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

enum StatusType {
    Draft = "draft",
    Published = "published",
    Sold = "sold",
    Active = "active"
}


@Injectable()
export class PropertyService {
    constructor(private prisma: PrismaService) { }

    async getPropertyAll() {
        return await this.prisma.property.findMany({
            include: {
                images: true,
                amenities: true,
            }
        })
    }

    async getPropertyById(property_id: number) {
        return await this.prisma.property.findFirst({
            where: {
                id: property_id
            },
            include: {
                images: true,
                amenities: true,
            }
        })
    }

    async createDraft(data: PropertyDraftDto) {
        return await this.prisma.property.create({
            data: {
                status: {
                    create: {}
                },
                user: {
                    connect: {
                        id: 1
                    }
                },
                details: {
                    create: {
                        title: data.details.title,
                        type: data.details.type as unknown as Property_type,
                        location: data.details.location,
                        price: data.details.price,
                        description: data.details.description
                    }
                },
                images: {
                    create: data.images?.map(image => ({
                        image: new Uint8Array(Buffer.from(image.image, 'base64')),
                        added_at: image.added_at
                    }))
                },
                amenities: {
                    create: data.amenities?.map(amenity => ({
                        name: amenity.name,
                        value: amenity.value
                    }))
                }
            },
        })
    }

    async update(data: PropertyDraftDto, property_id: number) {

    }


    async publish(@ValidatePublishData() data: Property_Publish, propert_id: number) {

    }

    async delete(property_id: number) {

    }
}

