import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyDto } from './property.dto';

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
}
