import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';

@Module({
    imports: [
        MulterModule.register({
            dest: './uploads',
        }),
    ],
    controllers: [PropertyController],
    providers: [PropertyService],
})
export class PropertyModule { }