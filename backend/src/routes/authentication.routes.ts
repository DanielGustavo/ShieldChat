import { Router } from 'express';

import createAuthenticationValidator from '../validators/createAuthenticationValidator';

import createAuthenticationService from '../services/createAuthenticationService';

const authenticationRouter = Router();

authenticationRouter.post(
  '/authentication',
  createAuthenticationValidator,
  async (request, response) => {
    const { username, password } = request.body;

    const { token, user } = await createAuthenticationService({
      username,
      password,
    });

    Object.assign(user, { password: undefined });

    return response.json({ token, user });
  }
);

export default authenticationRouter;
