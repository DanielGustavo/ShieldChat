import socketio from 'socket.io';
import { Server } from 'http';

import chat from './entities/chat';

import notifyClient from './utils/notifyClient';

import ensureAuthentication from './middlewares/ensureAuthentication';

export default (httpServer: Server): socketio.Server => {
  const io = socketio(httpServer);

  io.use(ensureAuthentication).on('connection', (socket) => {
    socket.emit('setup', {
      type: 'setup',
      users: chat.getUsers().map((user) => ({
        ...user,
        socketId: undefined,
      })),
      messages: chat.getMessages().map((message) => ({
        ...message,
        user: { ...message.user, socketId: undefined },
      })),
    });

    chat.addUser({
      socketId: socket.id,
      username: socket.user.username,
    });

    socket.on('add-message', (message: string) => {
      const user = chat.getUserById(socket.id);

      if (message && user) {
        chat.addMessage({ user, text: message });
      }
    });

    socket.on('disconnect', () => chat.removeUser(socket.id));
  });

  chat.subscribeObserver((notification) => notifyClient({ notification, io }));

  return io;
};
