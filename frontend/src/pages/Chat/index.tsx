import React from 'react';
import { FiSend } from 'react-icons/fi';

import {
  Container,
  Sidebar,
  MessagesWrapper,
  User,
  Message,
  ChatWrapper,
  Input,
} from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      <Sidebar>
        <User owner>test123</User>
        <User>MDuck</User>
        <User>Gustavo</User>
      </Sidebar>
      <ChatWrapper>
        <MessagesWrapper>
          <Message>
            <span>MDuck</span>
            <p>Good morning</p>
          </Message>
          <Message>
            <span>Daniel</span>
            <p>Hello world!</p>
          </Message>
          <Message owner>
            <span>test123</span>
            <p>Yeah!!</p>
          </Message>
          <Message>
            <span>MDuck</span>
            <p>Good morning</p>
          </Message>
          <Message>
            <span>Daniel</span>
            <p>Hello world!</p>
          </Message>
          <Message owner>
            <span>test123</span>
            <p>Yeah!!</p>
          </Message>
          <Message>
            <span>MDuck</span>
            <p>Good morning</p>
          </Message>
          <Message>
            <span>Daniel</span>
            <p>Hello world!</p>
          </Message>
          <Message owner>
            <span>test123</span>
            <p>Yeah!!</p>
          </Message>
          <Message>
            <span>MDuck</span>
            <p>Good morning</p>
          </Message>
          <Message>
            <span>Daniel</span>
            <p>Hello world!</p>
          </Message>
          <Message owner>
            <span>test123</span>
            <p>Yeah!!</p>
          </Message>
        </MessagesWrapper>
        <form>
          <Input>
            <input placeholder="Send a message..." />
            <button type="submit">
              <FiSend size={20} />
            </button>
          </Input>
        </form>
      </ChatWrapper>
    </Container>
  );
};

export default Chat;
