import { Router } from 'express';

import usersRouter from './users.routes';
import authenticationRouter from './authentication.routes';

const router = Router();

router.use(usersRouter);
router.use(authenticationRouter);

export default router;
