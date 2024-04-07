import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  let port :number = 3001
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`server listening on port https://localhost:${port}/`);


}

bootstrap();
