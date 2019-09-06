import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CoreModule } from './core/core.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    CoreModule,
    new FastifyAdapter(),
  );

  const options = new DocumentBuilder()
    .setTitle('Kaholo')
    .setDescription('The Kaholo API description')
    .setVersion('1.0')
    .addTag('Kaholo')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
