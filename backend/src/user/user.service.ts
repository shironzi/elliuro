import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async getProperties() {
        const properties = await this.prisma.property.findMany({
            where: { user_id: 1 },
            include: {
                details: { select: { title: true } },
                images: { select: { name: true }, take: 1 }
            }
        });

        const filteredProperties = properties.map((data) => {
            return {
                id: data.id,
                title: data.details.title,
                imageName: data.images[0]?.name
            };
        });

        return filteredProperties;
    }
}