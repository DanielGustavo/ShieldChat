import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import socketio from 'socket.io-client';

import { useAuth } from './AuthContext';

interface UserProps {
  username: string;
}

interface MessageProps {
  text: string;
  user: UserProps;
}

interface SetupNotification {
  users: UserProps[];
  messages: MessageProps[];
}

interface AddUserNotification {
  user: UserProps;
}

interface RemoveUserNotification {
  user: UserProps;
}

interface AddMessageNotification {
  message: MessageProps;
}

interface UsersConnections {
  [username: string]: number;
}

interface ChatProps {
  users: UserProps[];
  messages: MessageProps[];
  sendMessage: (arg0: string) => void;
}

const ChatContext = createContext({} as ChatProps);

export function useChat(): ChatProps {
  return useContext(ChatContext);
}

export const ChatProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState([] as MessageProps[]);
  const [io, setIo] = useState<SocketIOClient.Socket | undefined>(undefined);
  const [users, setUsers] = useState([] as UserProps[]);
  const [, setUsersConnections] = useState({} as UsersConnections);

  const { token, authenticated, logout, user } = useAuth();

  useEffect(() => {
    if (!authenticated && io) {
      io.disconnect();
      setIo(undefined);
    } else if (authenticated && !io) {
      const socketConnection = socketio.connect('ws://10.0.0.114:3333', {
        query: {
          token: `Bearer ${token}`,
        },
      });

      setIo(socketConnection);
    }
  }, [token, io, authenticated]);

  useEffect(() => {
    const addUser = (notification: AddUserNotification) => {
      const { username } = notification.user;
      const isOwner = username === user.username;

      setUsersConnections((state) => {
        return {
          ...state,
          [username]: (state[username] || 0) + 1,
        };
      });

      const userAlreadyListed = (state: UserProps[]) =>
        state.findIndex((currentUser) => currentUser.username === username) >=
        0;

      setUsers((state) => {
        if (userAlreadyListed(state)) return state;

        return isOwner
          ? [notification.user, ...state]
          : [...state, notification.user];
      });
    };

    const removeUser = (notification: RemoveUserNotification) => {
      const { username } = notification.user;
      let connections = 0;

      setUsersConnections((state) => {
        connections = state[username] || 0;

        if (connections < 1) return state;

        return { ...state, [username]: connections - 1 };
      });

      if (connections > 1) return;

      setUsers((state) =>
        state.filter((currentUser) => {
          return currentUser.username !== username;
        })
      );
    };

    const addMessage = (notification: AddMessageNotification) => {
      setMessages((state) => [...state, notification.message]);
    };

    io?.off('setup').on('setup', (notification: SetupNotification) => {
      notification.messages.forEach((currentMessage) =>
        addMessage({ message: currentMessage })
      );

      notification.users.forEach((currentUser) => {
        addUser({ user: currentUser });
      });
    });

    io?.off('remove-user').on('remove-user', removeUser);
    io?.off('add-user').on('add-user', addUser);
    io?.off('add-message').on('add-message', addMessage);
    io?.off('disconnect').on('disconnect', () => {
      logout();
    });
  }, [io, logout, user]);

  const sendMessage = useCallback(
    (message: string) => {
      io?.emit('add-message', message);
    },
    [io]
  );

  return (
    <ChatContext.Provider value={{ users, messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
