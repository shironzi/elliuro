import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyDto } from './property.dto';

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

    create(data: PropertyDto) {
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

    async update(property_id: number, data: PropertyDto) {
        try {
            const updatedProperty = this.prisma.property.update({
                where: {
                    id: property_id
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
}
