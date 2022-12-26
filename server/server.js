import { config } from 'dotenv';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import connectDB from './db/connection.js';
import cors from 'cors';

const app = express();
app.use(express.json());

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
  config({ path: '.env.dev' });
  app.use(cors());
} else {
  config({ path: '.env.prod' });
  app.use(secure);
}

connectDB();

app.listen(process.env.PORT, console.log(`INFO: Backend listening on port ${process.env.PORT}`))