import { Property_type } from '@prisma/client';
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

    const filteredProperties = properties.filter((propertyData) => {
      return propertyData.status.status === PropertyStatus[PropertyStatus.ACTIVE];
    });

    return filteredProperties
  }

  async getPropertyByPropertyType(propertyType: string) {
    const properties = await this.prisma.property.findMany({
      where: {
        details: {
          type: {
            equals: propertyType.toUpperCase() as Property_type
          }
        }
      },
      include: {
        status: true,
        details: true,
        images: true,
      },
    })

    const filteredProperties = properties.filter((propertyData) => {
      return propertyData.status.status === PropertyStatus[PropertyStatus.ACTIVE];
    });

    return filteredProperties
  }
}
