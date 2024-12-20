import { BadRequestException, HttpException, HttpStatus, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyAmenityDto, PropertyDetailsDto, FilesUploadDto } from './property_draft.dto';
import { PropertyPublishDto } from './property_publish.dto';
import { ValidatePropertyData } from './property.decorator';
import { Property_type } from '@prisma/client';
import { buffer } from 'stream/consumers';


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

    async getPropertyById(propertyId: number) {
        return await this.prisma.property.findFirst({
            where: {
                id: propertyId
            },
            include: {
                images: true,
                amenities: true,
                status: true
            }
        })
    }

    async getPropertyDetails(propertyId: number) {
        return this.prisma.property.findFirst({
            where: {
                id: propertyId
            },
            include: {
                details: true
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
        const allowedTypes = Object.values(Property_type)

        if (!allowedTypes.includes(data.type?.toUpperCase() as Property_type)) {
            throw new BadRequestException(`type must be one of the following values: ${allowedTypes.join(', ')}`);
        }

        await this.prisma.property.upsert({
            where: {
                id: propertyId ? propertyId : 0,
                user_id: 1
            },
            update: {
                details: {
                    update: {
                        title: data.title,
                        type: data.type as Property_type,
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
                        type: data.type as Property_type,
                        location: data.location,
                        price: data.price,
                        description: data.description
                    }
                }
            }
        })

        return propertyId ? `Property Details have been Updated` : `Property Details have been Created`;
    }

    async getPropertyImages(@Param('propertyId') propertyId: number) {
        const propertyImages = await this.prisma.images.findMany({
            where: {
                property_id: propertyId
            }
        })

        return propertyImages.map(image => ({
            image: Buffer.from(image.image).toString('base64'),
            name: image.name
        }));
    }

    async upsertPropertyImages(data: Express.Multer.File[], propertyId: number) {

        const propertyImageIds = await this.prisma.images.findMany({
            where: {
                property_id: propertyId
            },
            select: {
                id: true,
                name: true,
                image: true
            }
        });

        const imagesToDelete = propertyImageIds.filter(image => !data.some(file => file.originalname === image.name)).map(image => image.id)

        if (imagesToDelete.length > 0) {
            await this.prisma.images.deleteMany({
                where: {
                    id: { in: imagesToDelete }
                }
            })
        }

        Promise.all(
            data.map(file => {
                const imageData = file.buffer;
                const imageName = file.originalname;

                if (!imageData) {
                    throw new HttpException('File data is undefined', HttpStatus.BAD_REQUEST);
                }

                const existingImage = propertyImageIds.find(image => image.name === imageName);

                return this.prisma.images.upsert({
                    where: { id: existingImage?.id || 0 },
                    update: {
                        image: Buffer.from(imageData),
                        updated_at: new Date()
                    },
                    create: {
                        property_id: propertyId,
                        name: imageName,
                        image: Buffer.from(imageData),
                        added_at: new Date(),
                        updated_at: new Date()
                    }
                });
            })
        )

        return { message: 'Files uploaded successfully' };
    }

    async getPropertyAmenities(propertyId: number) {
        const amenities = await this.prisma.amenities.findMany({
            where: {
                property_id: propertyId
            }
        })

        return amenities
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