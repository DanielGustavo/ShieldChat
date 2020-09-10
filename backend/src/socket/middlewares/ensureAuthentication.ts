import { Socket } from 'socket.io';

import validateTokenService from '../../services/validateTokenService';

type nextFunction = (err?: Error | string) => void;

export default function ensureAuthentication(
  socket: Socket,
  next: nextFunction
): void {
  if (socket.handshake.query && socket.handshake.query.token) {
    const { token } = socket.handshake.query;

    try {
      const { username } = validateTokenService(token);
      socket.user = { username };
    } catch {
      socket.disconnect();
    }

    next();
  }
}
