import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FiSend, FiLogOut } from 'react-icons/fi';
import socketio from 'socket.io-client';

import { useAuth } from '../../context/AuthContext';

import {
  Container,
  Sidebar,
  MessagesWrapper,
  User,
  Message,
  ChatWrapper,
  Input,
} from './styles';

import {
  MessageProps,
  RemoveUserNotification,
  SetupNotification,
  AddMessageNotification,
  UserProps,
  UsersConnections,
  AddUserNotification,
} from './types';

const Chat: React.FC = () => {
  const [users, setUsers] = useState([] as UserProps[]);
  const [, setUsersConnections] = useState({} as UsersConnections);
  const [messages, setMessages] = useState([] as MessageProps[]);
  const [io, setIo] = useState<SocketIOClient.Socket | null>(null);

  const { user, token, logout } = useAuth();

  const messagesWrapperRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!io) {
      setIo(socketio.connect(`localhost:3333?token=${`Bearer ${token}`}`));
      return;
    }

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

    const addMessage = (notification: AddMessageNotification) => {
      setMessages((state) => [...state, notification.message]);
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

    io.on('setup', (notification: SetupNotification) => {
      notification.users.map((currentUser) => addUser({ user: currentUser }));
      notification.messages.map((currentMessage) =>
        addMessage({ message: currentMessage })
      );
    });

    io.on('add-user', addUser);
    io.on('remove-user', removeUser);
    io.on('add-message', addMessage);
  }, [token, user, io, setIo, setUsersConnections]);

  useEffect(() => {
    function setScrollTopToBottom() {
      if (messagesWrapperRef.current) {
        const { scrollHeight, scrollTop } = messagesWrapperRef.current;

        const isAbleToScrollDown = scrollHeight - scrollTop < 722;

        if (isAbleToScrollDown) {
          messagesWrapperRef.current.scrollTop =
            messagesWrapperRef.current.scrollHeight;
        }
      }
    }

    setScrollTopToBottom();
  }, [setUsers, messages]);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      const message = messageInputRef.current?.value;

      if (message && messageInputRef.current?.value && io) {
        io.emit('add-message', message);

        messageInputRef.current.value = '';
      }
    },
    [io]
  );

  return (
    <Container>
      <Sidebar>
        {users.map((currentUser) => {
          const isOwner = currentUser.username === user.username;

          return (
            <User owner={isOwner} key={currentUser.username}>
              {currentUser.username}
              {isOwner && (
                <button type="button" onClick={logout}>
                  <FiLogOut size={15} />
                </button>
              )}
            </User>
          );
        })}
      </Sidebar>
      <ChatWrapper>
        <MessagesWrapper ref={messagesWrapperRef}>
          {messages.map((message) => {
            const isOwner = message.user.username === user.username;

            return (
              <Message key={Math.random()} owner={isOwner}>
                <span>{message.user.username}</span>
                <p>{message.text}</p>
              </Message>
            );
          })}
        </MessagesWrapper>
        <form onSubmit={handleSubmit}>
          <Input>
            <input ref={messageInputRef} placeholder="Send a message..." />
            <button type="submit">
              <FiSend size={18} />
            </button>
          </Input>
        </form>
      </ChatWrapper>
    </Container>
  );
};

export default Chat;
