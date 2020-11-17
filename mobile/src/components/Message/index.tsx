import React from 'react';

import { useAuth } from '../../context/AuthContext';

import { Container, MessageText, MessageUsernameText } from './styles';

import { MessageProps } from '../../screens/Chat/types';

interface Props {
  message: MessageProps;
}

const Message: React.FC<Props> = ({ message }) => {
  const { user } = useAuth();

  return (
    <Container owner={message.user.username === user?.username}>
      <MessageUsernameText>{message.user.username}</MessageUsernameText>
      <MessageText>{message.text}</MessageText>
    </Container>
  );
};

export default Message;
