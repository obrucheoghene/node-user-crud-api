import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
const MONGO_DB_URL = process.env.DB_URL;
mongoose.Promise = Promise;
mongoose.connect(MONGO_DB_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));
