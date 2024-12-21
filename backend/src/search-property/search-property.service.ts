import { Injectable } from '@nestjs/common';
import { contains } from 'class-validator';
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

    console.log("1. RUnning")

    return filteredProperties;
  }

  async getPropertyByLocation(location: string) {
    const properties = await this.prisma.property.findMany({
      where: {
        details: {
          location: {
            contains: location
          }
        }
      },
      include: {
        status: true,
        details: true,
        images: true,
      },
    });

    console.log("2. Starting")

    const filteredProperties = properties.filter((propertyData) => {
      return propertyData.status.status === PropertyStatus[PropertyStatus.ACTIVE] && propertyData.details.location.includes(location);
    });

    return properties
  }
}
