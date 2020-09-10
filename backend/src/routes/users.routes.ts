import { Router } from 'express';

import createUserService from '../services/createUserService';

import createUserValidator from '../validators/createUserValidator';

const usersRouter = Router();

usersRouter.post('/users', createUserValidator, async (request, response) => {
  const { username, password } = request.body;

  const user = await createUserService({ username, password });

  Object.assign(user, { password: undefined });

  return response.json(user);
});

export default usersRouter;
