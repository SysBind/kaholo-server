import {MongoMemoryServer} from 'mongodb-memory-server';
import bootstrap from '../../src/main';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
// import { CoreModule } from '../../src/core/core.module';
// import { CoreService } from '../../src/core/core.service';
// import { Test } from '@nestjs/testing';
// import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';


module.exports = async () => {
  const mongoMemServer = new MongoMemoryServer({});
try {
  const connectionString = await mongoMemServer.getConnectionString();
  
  global.app = await bootstrap();

  process.env.MONGODB_URL = connectionString;
  global.databaseServer = mongoMemServer;

} catch (err) {
  console.log(err)
}
};
