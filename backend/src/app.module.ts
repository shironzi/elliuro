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
import { SearchPropertyModule } from './search-property/search-property.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGOOSE_URI),
    AuthModule,
    PrismaModule,
    PropertyModule,
    SearchPropertyModule,
    UserModule,
  ],
  controllers: [AuthController, PropertyController],
  providers: [AuthService, PropertyService],
})
export class AppModule { }
