import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { databaseProviders } from './config/typeorm.providers';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGOOSE_URI),
  ],
  controllers: [],
  providers: [...databaseProviders],
})
export class AppModule { }
