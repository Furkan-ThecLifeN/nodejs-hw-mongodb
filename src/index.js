import dotenv from 'dotenv';
dotenv.config();
console.log('Loaded MONGODB_URL:', process.env.MONGODB_URL);


import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const start = async () => {
  await initMongoConnection();
  setupServer();

};

start();
