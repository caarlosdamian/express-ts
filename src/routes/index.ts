import { Router } from 'express';
import usersRouter from './user';

const rootRouter = Router();

rootRouter.use('/api/users', usersRouter);

export default rootRouter;
