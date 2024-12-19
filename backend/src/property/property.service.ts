import { BadRequestException, Injectable, Param } from '@nestjs/common';
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
        return this.prisma.images.findMany({
            where: {
                property_id: propertyId
            }
        })
    }

    async upsertPropertyImages(data: FilesUploadDto[], propertyId: number) {
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



        for (const file of data) {
            console.log(file.files)
            //     const base64Image = file.base64.split(';base64,').pop();
            //     const buffer = Buffer.from(base64Image, 'base64');
            //     console.log(base64Image)
            //     console.log(buffer)
            //     // const existingImage = propertyImageIds.find(existing => existing.name === file.image.name)
            //     // await this.prisma.images.upsert({
            //     //     where: { id: existingImage?.id || 0 },
            //     //     update: { image: base64Image },
            //     //     create: {
            //     //         name: file.image.name,
            //     //         image: new Uint8Array(await file.image.arrayBuffer()),
            //     //         added_at: new Date(file.image.lastModified),
            //     //         property: {
            //     //             connect: {
            //     //                 id: propertyId
            //     //             }
            //     //         }
            //     //     }

            //     // })
        }
    }

    async savePropertyImage(file: Express.Multer.File, propertyId: number) {
        const imagePath = file.path; // Path where the file is saved
        const imageName = file.originalname; // Original file name

        // Save file metadata in the database
        await this.prisma.images.create({
            data: {
                property_id: propertyId,
                name: imageName,
                image: new Uint8Array(Buffer.from(imagePath)),
            },
        });

        return { message: 'File uploaded successfully' };
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