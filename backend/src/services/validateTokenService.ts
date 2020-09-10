import jsonwebtoken from 'jsonwebtoken';

import AppError from '../errors/AppError';

import jwtConfig from '../config/jwtConfig';

interface JWT {
  sub: string;
  username: string;
}

export default function validateTokenService(authorization: string): JWT {
  if (!authorization) {
    throw new AppError(401, 'Token was not provided');
  }

  const [, token] = authorization.split(' ');

  try {
    const { sub, username } = jsonwebtoken.verify(
      token,
      jwtConfig.secret
    ) as JWT;

    return { sub, username };
  } catch {
    throw new AppError(401, 'Invalid token');
  }
}
