import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyAmenityDto, PropertyDetailsDto, PropertyImageDto } from './property_draft.dto';
import { PropertyPublishDto } from './property_publish.dto';
import { ValidatePropertyData } from './property.decorator';
import { Property_type } from '@prisma/client';


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
                status: true
            }
        })
    }

    async createIntialProperty() {
        const property = await this.prisma.property.create({
            data: {
                user: {
                    connect: {
                        id: 1
                    }
                },
                status: {
                    create: {}
                },
                details: {
                    create: {
                        title: '',
                        location: '',
                        price: 0,
                        description: ''
                    }
                }
            }
        })

        return property.id
    }

    async upsertPropertyDetails(data: PropertyDetailsDto, propertyId: number) {
        await this.prisma.property.upsert({
            where: {
                id: propertyId ? propertyId : 0,
                user_id: 1
            },
            update: {
                details: {
                    update: {
                        title: data.title,
                        type: data.type as keyof typeof Property_type,
                        location: data.location,
                        price: data.price,
                        description: data.description
                    }
                }
            },
            create: {
                user: {
                    connect: {
                        id: 1
                    }
                },
                status: {
                    create: {}
                },
                details: {
                    create: {
                        title: data.title,
                        type: data.type as keyof typeof Property_type,
                        location: data.location,
                        price: data.price,
                        description: data.description
                    }
                }
            }
        })

        return propertyId ? `Property Details have been Updated` : `Property Details have been Created`;
    }

    async upsertPropertyImages(data: PropertyImageDto[], propertyId: number) {
        const propertyImageIds = await this.prisma.images.findMany({
            where: {
                property_id: propertyId
            },
            select: {
                id: true,
                name: true,
                image: true
            }
        })

        for (const image of data) {
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
                            id: propertyId
                        }
                    }
                }
            })
        }
    }

    async upsertPropertyAmenities(data: PropertyAmenityDto[], propertyId: number) {
        const propertyAmenitiesIds = await this.prisma.amenities.findMany({
            where: {
                property_id: propertyId
            },
            select: {
                id: true,
                name: true,
                value: true
            }
        })

        for (const amenity of data) {
            const existingAmenity = propertyAmenitiesIds.find(existingAmenity => existingAmenity.name === amenity.name);

            await this.prisma.amenities.upsert({
                where: { id: existingAmenity?.id || 0 },
                update: { value: amenity.value },
                create: {
                    name: amenity.name,
                    value: amenity.value,
                    property: {
                        connect: {
                            id: propertyId
                        }
                    }
                }
            })
        }
    }

    async publishProperty(@ValidatePropertyData() data: PropertyPublishDto, propertyId: number) {
        try {
            await this.prisma.status.update({
                where: {
                    id: propertyId
                },
                data: {
                    status: data.status.status
                }
            });

            return `Property with id (${propertyId}) has been published.`;
        } catch (error) {
            console.error('Error publishing property:', error);
            throw new Error('Failed to publish property');
        }
    }

    async deleteProperty(propertyId: number): Promise<string> {
        try {
            await this.prisma.property.delete({
                where: {
                    id: propertyId
                }
            });

            return `Property with id ${propertyId} has been deleted.`;
        } catch (error) {
            console.error('Error deleting property:', error);
            throw new Error('Failed to delete property');
        }
    }
}