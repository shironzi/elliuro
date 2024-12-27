import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { databaseProviders } from './config/typeorm.providers';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGOOSE_URI),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [...databaseProviders],
})
export class AppModule { }
