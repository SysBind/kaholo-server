import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { MongoMemoryServer } from 'mongodb-memory-server';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        MONGODB_URL: string;
        NODE_ENV: 'test';
    }
    interface Global {
        app: NestFastifyApplication;
        databaseServer: MongoMemoryServer;
    }
  }
}
