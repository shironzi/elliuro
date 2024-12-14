import { Amenity } from './../../node_modules/.prisma/client/index.d';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Property_Draft } from './property_draft.dto';
import { Property_Publish } from './property_publish.dto';
import { ValidatePublishData } from './property.decorator';

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
        const property = await this.prisma.property.findUnique({
            where: {
                id: property_id
            },
            include: {
                Property_Amenities: {
                    include: {
                        amenity: true
                    }
                }
            }
        });

        if (!property) {
            return
        }

        return property
    }

    //* creating the amenity and image when creating draft */

    async createDraft(data: Property_Draft) {
        return await this.prisma.property.create({
            data: {
                ...data,
                details: {
                    create: {
                        title: data.details.title,
                        type: data.details.type as unknown as Property_type,
                        location: data.details.location,
                        price: data.details.price,
                        description: data.details.description,
                    },
                },
                status: {
                    create: {
                        status: "DRAFT",
                    },
                },
                user: {
                    connect: { id: 1 },
                },
                Property_Amenities: {
                    create: data.amenities?.map(amenity => ({
                        amenity: {
                            create: {
                                name: amenity.name,
                            },
                        },
                        value: amenity.value,
                    })),
                },
                Property_Images: {
                    create: data.images?.map(image => ({
                        image: {
                            connect: {
                                id: image.id,
                            },
                        },
                    }))
                },
            },
        });
    }

    async update(data: Property_Draft, property_id: number) {

    }


    async publish(@ValidatePublishData() data: Property_Publish, propert_id: number) {
        return this.prisma.property.update({
            where: { id: propert_id, user_id: 1 },
            data: {
                status: {
                    connect: { id: data.statusId }
                }
            }
        })
    }

    async delete(property_id: number) {
        return this.prisma.property.delete({
            where: {
                id: property_id,
                user_id: 1
            }
        })
    }
}
