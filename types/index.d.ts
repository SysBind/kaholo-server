import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { MongoMemoryServer } from 'mongodb-memory-server';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        MONGODB_URL: string;
        NODE_ENV: 'test';
        WEBSOCKET_URL?: string;
    }
    interface Global {
        io: SocketIOClient.Socket;
        app: NestFastifyApplication;
        databaseServer: MongoMemoryServer;
    }
  }
}
