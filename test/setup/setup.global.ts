import {MongoMemoryServer} from 'mongodb-memory-server';
import bootstrap from '../../src/main';


module.exports = async () => {
  const mongoMemServer = new MongoMemoryServer({});
  
    try {
      const connectionString = await mongoMemServer.getConnectionString();
    
      global.app = await bootstrap();

      process.env.MONGODB_URL = connectionString;
      global.databaseServer = mongoMemServer;

      } catch (err) {
        throw err;
    }
};
