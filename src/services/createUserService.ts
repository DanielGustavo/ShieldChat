import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../database/models/User';

import AppError from '../errors/AppError';

interface Request {
  username: string;
  password: string;
}

export default async function createUser({
  username,
  password,
}: Request): Promise<User> {
  const usersRepository = getRepository(User);

  const usernameAlreadyExists = !!(await usersRepository.findOne({
    where: { username },
  }));

  if (usernameAlreadyExists) {
    throw new AppError(400, 'Username already exists');
  }

  const passwordHash = await hash(password, 8);

  const user = usersRepository.create({
    username,
    password: passwordHash,
  });

  await usersRepository.save(user);

  return user;
}
