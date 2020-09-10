import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';

import User from '../database/models/User';

import AppError from '../errors/AppError';

import jwtConfig from '../config/jwtConfig';

interface Request {
  username: string;
  password: string;
}

interface Response {
  token: string;
  user: User;
}

export default async function createAuthenticationService({
  username,
  password,
}: Request): Promise<Response> {
  const usersRepository = getRepository(User);

  const user = await usersRepository.findOne({ where: { username } });

  if (!user) {
    throw new AppError(400, 'Username or password is wrong');
  }

  const passwordIsCorrect = await compare(password, user.password);

  if (!passwordIsCorrect) {
    throw new AppError(400, 'Username or password is wrong');
  }

  const token = jsonwebtoken.sign({ username }, jwtConfig.secret, {
    ...jwtConfig.options,
    subject: user.id,
  });

  return { user, token };
}
