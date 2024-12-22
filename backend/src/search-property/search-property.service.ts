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

  async searchProperties(query: {
    location?: string;
    propertyType?: string;
    priceMin?: number;
    priceMax?: number;
  }) {
    const { location, propertyType, priceMin, priceMax } = query;

    const properties = await this.prisma.property.findMany({
      where: {
        ...(location && {
          details: {
            location: {
              contains: location,
            },
          },
        }),
        ...(propertyType && propertyType.toLowerCase() !== 'any' && {
          details: {
            type: {
              equals: propertyType.toUpperCase() as Property_type,
            },
          },
        }),
        ...(priceMin !== undefined && priceMax !== undefined && {
          details: {
            price: {
              gte: priceMin,
              lte: priceMax,
            },
          },
        }),
      },
      include: {
        status: true,
        details: true,
        images: true,
      },
    });

    const filteredProperties = properties.filter((propertyData) => {
      if (propertyData.status.status === PropertyStatus[PropertyStatus.ACTIVE]) return propertyData;
    });

    return filteredProperties
  }
}
