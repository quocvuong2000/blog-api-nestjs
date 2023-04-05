import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

// An async function, which will bootstrap our application
// NestFactory exposes a few static methods that allow creating an application instance
// We simply start up our HTTP listener, which lets the application await inbound HTTP requests.
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(3000);
}
bootstrap();
