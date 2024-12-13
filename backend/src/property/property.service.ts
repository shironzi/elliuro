import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PropertyDto } from './property.dto';

@Injectable()
export class PropertyService {
    constructor(private prisma: PrismaService) { }

    create(data = PropertyDto) {
        
    }
}
