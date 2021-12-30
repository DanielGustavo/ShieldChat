import { Request, Response, NextFunction } from 'express';
import * as Yup from 'yup';

import AppError from '../errors/AppError';

export default async function userStoreValidator(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const schema = Yup.object().shape({
    username: Yup.string().min(5).required(),
    password: Yup.string().min(10).required(),
    password_confirmation: Yup.string()
      .required('password confirmation is required')
      .oneOf(
        [Yup.ref('password')],
        'password confirmation must be equal to the password field'
      ),
  });

  try {
    await schema.validate(request.body, { abortEarly: true });
  } catch (error) {
    throw new AppError(400, (error as Yup.ValidationError).message);
  }

  return next();
}
