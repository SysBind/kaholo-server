import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CoreModule } from './core/core.module';
import SocketIO from 'socket.io';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    CoreModule,
    new FastifyAdapter(),
  );

  const io = SocketIO(app.getHttpServer());

  const options = new DocumentBuilder()
    .setTitle('Kaholo')
    .setDescription('The Kaholo API description')
    .setVersion('1.0')
    .addTag('Kaholo')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  // tslint:disable-next-line:no-console
  io.on('connect', () => console.log('Socket.io has connected!'));

  await app.listen(3000);
}

bootstrap();
