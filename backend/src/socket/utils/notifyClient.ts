import { Server } from 'socket.io';
import { ObserverNotification } from '../entities/chat/types';

interface Request {
  notification: ObserverNotification;
  io: Server;
}

export default function notifyClient({ io, notification }: Request): void {
  const userWithNoSocketId = notification.user
    ? {
        ...notification.user,
        socketId: undefined,
      }
    : undefined;

  const messageWithNoSocketId = notification.message
    ? {
        ...notification.message,
        user: { ...notification.message.user, socketId: undefined },
      }
    : undefined;

  io.emit(notification.type, {
    ...notification,
    user: userWithNoSocketId,
    message: messageWithNoSocketId,
  });
}
