import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger} from "@nestjs/common";
import * as cookieParser from 'cookie-parser';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.enableCors({
    origin: "http://10.12.1.6:8082",
    credentials: true
  });
  await app.listen(port);
}
bootstrap().then(r =>{
  Logger.log(`Server running on http://localhost:${port}`, 'Boostrap');
});
