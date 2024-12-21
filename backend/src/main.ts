import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import * as bodyParser from 'body-parser';
import { SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }))
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '1024mb', extended: true }));
  const documentFactory = () => SwaggerModule.createDocument(app, {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
  }, {
    deepScanRoutes: true,
  });
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
