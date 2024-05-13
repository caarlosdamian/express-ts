import express from 'express';
import rootRouter from './routes';

export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(rootRouter);

  return app;
};
