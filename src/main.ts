import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1/blog');
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`Service is running on PORT ${PORT}`);
}
bootstrap();
