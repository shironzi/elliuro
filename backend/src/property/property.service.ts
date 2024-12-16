import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
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
        const propertyImageIds = await this.prisma.images.findMany({
            where: {
                property_id: property_id
            },
            select: {
                id: true
            }
        })

        const propertyAmenitiesIds = await this.prisma.amenities.findMany({
            where: {
                property_id: property_id
            },
            select: {
                id: true,
                name: true,
                value: true,
                property_id: true
            }
        })

        data.amenities?.map(async amenity => {
            const existingAmenity = propertyAmenitiesIds.find(existingAmenity => existingAmenity.name === amenity.name);
            await this.prisma.amenities.upsert({
                where: { id: existingAmenity?.id || 0 },
                update: { value: amenity.value },
                create: {
                    name: amenity.name,
                    value: amenity.value,
                    property: {
                        connect: {
                            id: property_id
                        }
                    }
                }
            })
        })

        await this.prisma.property.update({
            where: {
                id: property_id
            },
            data: {
                user: {
                    connect: {
                        id: 1
                    }
                },
                details: {
                    update: {
                        title: data.details.title,
                        type: data.details.type as unknown as Property_type,
                        location: data.details.location,
                        price: data.details.price,
                        description: data.details.description
                    }
                },
            },
        })
    }
}

