import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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

        return properties
    }
}
