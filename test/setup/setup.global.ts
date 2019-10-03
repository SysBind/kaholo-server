import {MongoMemoryServer} from 'mongodb-memory-server';
import bootstrap from '../../src/main';
import { NestFastifyApplication } from '@nestjs/platform-fastify';


module.exports = async () => {
  const mongoMemServer = new MongoMemoryServer({});

  const connectionString = await mongoMemServer.getConnectionString();

  process.env.MONGODB_URL = connectionString;

  global.app = await bootstrap();
  global.databaseServer = mongoMemServer;
};
