import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GesturesRecognizer from 'react-native-swipe-gestures';

import Message from '../../components/Message';

import { MessageProps } from './types';

import {
  Container,
  TextInputContainer,
  TextInput,
  FeatherIcon,
} from './styles';

const Chat: React.FC = () => {
  const { navigate } = useNavigation();

  const [messages, setMessages] = useState([
    { user: { username: 'Daniel' }, text: 'Hello world' },
    { user: { username: 'User1' }, text: 'Hello world' },
    { user: { username: 'User1' }, text: 'Hello world' },
    { user: { username: 'User1' }, text: 'Hello world' },
    { user: { username: 'Daniel' }, text: 'Ok' },
  ] as MessageProps[]);

  return (
    <GesturesRecognizer
      style={{ flex: 1 }}
      onSwipeLeft={() => navigate('Sidebar')}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Container>
          <FlatList
            data={messages}
            keyExtractor={(message, index) => `${message.text}${index}`}
            renderItem={({ item }) => <Message message={item} />}
          />

          <TextInputContainer>
            <TextInput multiline placeholder="Send a message..." />
            <FeatherIcon name="send" size={20} />
          </TextInputContainer>
        </Container>
      </KeyboardAvoidingView>
    </GesturesRecognizer>
  );
};

export default Chat;
