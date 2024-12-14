import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Property_Draft } from './property_draft.dto';
import { Property_Publish } from './property_publish.dto';
import { ValidatePublishData } from './property.decorator';
import { Property } from '@prisma/client';

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

    async getProperty(property_id: number, user_id: number): Promise<Property> {
        const property = await this.prisma.property.findFirst({
            where: {
                id: property_id,
                user_id: user_id
            }
        })

        if (!property) {
            return
        }

        return property
    }

    createDraft(data: Property_Draft) {
        return this.prisma.property.create({
            data: {
                ...data,
                user: {
                    connect: { id: 1 }
                },
                details: {
                    create: data.details
                },
                Property_Images: {
                    create: data.images.map(image => ({
                        image: {
                            create: image
                        }
                    }))
                },
                Property_Amenities: {
                    create: data.amenities_list.map(amenity => ({
                        amenity: {
                            connect: { id: amenity.id }
                        },
                        value: amenity.value
                    }))
                }

            }
        })
    }

    async update(data: Property_Draft, property_id: number) {
        try {
            const updatedProperty = this.prisma.property.update({
                where: {
                    id: property_id,
                    user_id: 1
                },
                data: {
                    ...data,
                    user: {
                        connect: { id: 1 }
                    },
                    details: {
                        update: {
                            where: { id: data.details[0].id },
                            data: {
                                title: data.details[0].title,
                                type: data.details[0].type as unknown as Property_type,
                                location: data.details[0].location,
                                price: parseInt(data.details[0].price),
                                description: data.details[0].description
                            }
                        }
                    },
                }
            })

            const existingImageIds = data.images.map(image => image.id)
            await this.prisma.property_Images.deleteMany({
                where: {
                    property_id: property_id,
                    image_id: { notIn: existingImageIds }
                }
            })

            await Promise.all(data.images.map(image => {
                return this.prisma.property_Images.upsert({
                    where: { id: image.id },
                    update: { image: { update: image } },
                    create: {
                        property: { connect: { id: property_id } },
                        image: { create: image }
                    }
                })
            }))

            const existingAmenityIds = data.amenities_list.map(amenity => amenity.id)

            await this.prisma.property_Amenities.deleteMany({
                where: {
                    property_id: property_id,
                    amenity_id: { notIn: existingAmenityIds }
                }
            })

            await Promise.all(data.amenities_list.map(amenity => {
                return this.prisma.property_Amenities.upsert({
                    where: { id: amenity.id },
                    update: { amenity: { update: amenity } },
                    create: {
                        property: { connect: { id: property_id } },
                        amenity: { connect: { id: amenity.id } },
                        value: amenity.value
                    }
                })
            }))

            return updatedProperty
        } catch (error) {
            throw new Error(String(error))
        }
    }

    publish(@ValidatePublishData() data: Property_Publish, propert_id: number) {
        return this.prisma.property.update({
            where: { id: propert_id, user_id: 1 },
            data: {
                status: {
                    connect: { id: data.statusId }
                }
            }
        })
    }

    delete(property_id: number) {
        return this.prisma.property.delete({
            where: {
                id: property_id,
                user_id: 1
            }
        })
    }
}
