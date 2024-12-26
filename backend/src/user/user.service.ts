import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as dotenv from 'dotenv'

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async getProperties() {
        const properties = await this.prisma.property.findMany({
            where: {
                user_id: 1
            },
            include: {
                details: {
                    select: {
                        title: true
                    }
                },
                images: {
                    select: {
                        image: true
                    },
                    take: 1
                }
            }
        })

        const filteredProperties = properties.map((data) => {

            const imageBase64 = Buffer.from(data.images[0].image).toString('base64')
            return {
                id: data.id,
                title: data.details.title,
                image: imageBase64,
            };
        });
        return filteredProperties
    } S
}
