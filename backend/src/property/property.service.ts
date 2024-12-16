import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyDraftDto } from './property_draft.dto';
import { PropertyPublishDto } from './property_publish.dto';
import { ValidatePropertyData } from './property.decorator';

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
        await this.prisma.property.create({
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
                        name: image.name,
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

        return `Successfully Created Property.`
    }

    async update(data: PropertyDraftDto, property_id: number) {
        const propertyImageIds = await this.prisma.images.findMany({
            where: {
                property_id: property_id
            },
            select: {
                id: true,
                name: true,
                image: true
            }
        })

        Promise.all(
            data.images?.map(async image => {
                const existingImage = propertyImageIds.find(existing => existing.name === image.name)
                await this.prisma.images.upsert({
                    where: { id: existingImage?.id || 0 },
                    update: { image: new Uint8Array(Buffer.from(image.image, 'base64')) },
                    create: {
                        name: image.name,
                        image: new Uint8Array(Buffer.from(image.image, 'base64')),
                        added_at: image.added_at,
                        property: {
                            connect: {
                                id: property_id
                            }
                        }
                    }
                })
            })
        )

        const propertyAmenitiesIds = await this.prisma.amenities.findMany({
            where: {
                property_id: property_id
            },
            select: {
                id: true,
                name: true,
                value: true,
            }
        })

        Promise.all(
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
        )

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

        return `property with id ${property_id} has been updated.`
    }

    async publish(data: PropertyPublishDto, propertyId: number) {
        try {
            ValidatePropertyData(data);

            await this.prisma.status.update({
                where: {
                    id: propertyId
                },
                data: {
                    status: "PUBLISH"
                }
            });
        } catch (error) {
            console.error('Error publishing property:', error);
            throw new Error('Failed to publish property');
        }
    }
}

