import dotenv from 'dotenv';
dotenv.config();

import { setupServer } from './server.js';

const start = async () => {
  setupServer();
};

start();
