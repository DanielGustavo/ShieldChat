import './database';

import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import http from 'http';

import AppError from './errors/AppError';

import socketEvents from './socket/socketEvents';

import routes from './routes';

const app = express();
const httpServer = http.createServer(app);
socketEvents(httpServer);

app.use(express.json());
app.use('/css', express.static(`${__dirname}/resources/css`));
app.use('/js', express.static(`${__dirname}/resources/js`));
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        error: error.message,
      });
    }

    return response
      .status(500)
      .json({ status: 'error', error: 'Internal server error' });
  }
);

httpServer.listen(process.env.APP_PORT, () => {
  console.log('[server] started!');
});
