import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigService } from "@nestjs/config";
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PropertyController } from './property/property.controller';
import { PropertyService } from './property/property.service';
import { PropertyModule } from './property/property.module';
import { MongoModule } from './mongo/mongo.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    PrismaModule,
    PropertyModule,
    MongoModule,
  ],
  controllers: [AuthController, PropertyController],
  providers: [AuthService, PropertyService],
})
export class AppModule { }
