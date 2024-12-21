import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

enum PropertyStatus {
  DRAFT,
  PUBLISH,
  ACTIVE,
  SOLD,
}

@Injectable()
export class SearchPropertyService {
  constructor(private prisma: PrismaService) { }

  async getAll() {
    const properties = await this.prisma.property.findMany({
      include: {
        status: true,
        details: true,
        images: true
      }
    })

    const filteredProperties = properties.filter(propertyData => {
      return propertyData.status.status === PropertyStatus[PropertyStatus.ACTIVE];
    });

    return filteredProperties;
  }
}
