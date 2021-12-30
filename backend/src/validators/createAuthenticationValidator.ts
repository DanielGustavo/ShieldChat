import { Request, Response, NextFunction } from 'express';
import * as Yup from 'yup';

import AppError from '../errors/AppError';

export default async function createAuthenticationValidator(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const schema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  try {
    await schema.validate(request.body, { abortEarly: true });
  } catch (error) {
    throw new AppError(400, (error as Yup.ValidationError).message);
  }

  return next();
}
