import { Router } from 'express';

import pagesRouter from './pages.routes';
import usersRouter from './users.routes';
import authenticationRouter from './authentication.routes';

const router = Router();

router.use(pagesRouter);
router.use(usersRouter);
router.use(authenticationRouter);

export default router;
