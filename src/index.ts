import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import * as dotenv from 'dotenv';
import router from './router';
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
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_DB_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());
