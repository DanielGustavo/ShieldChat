import React, { useRef } from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Swiper from 'react-native-swiper';

import Message from '../../components/Message';
import { FormRef } from '../../components/Form';
import Sidebar from '../../components/Sidebar';

import { useChat } from '../../context/ChatContext';

import {
  Container,
  Input,
  FeatherIcon,
  Form,
  FeatherIconContainer,
} from './styles';

interface FormProps {
  input?: string;
}

const Chat: React.FC = () => {
  const formRef = useRef({} as FormRef);
  const chatListRef = useRef({} as FlatList);

  const { messages, sendMessage } = useChat();

  function handleSubmit() {
    const { input: message } = formRef.current.getFields() as FormProps;

    if (message) {
      sendMessage(message);
    }
  }

  function handleChatListSizeChanging() {
    chatListRef.current.scrollToEnd({ animated: true });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Swiper loop={false} showsPagination={false}>
        <Container>
          <FlatList
            ref={chatListRef}
            data={messages}
            keyExtractor={(message, index) => `${message.text}${index}`}
            renderItem={({ item }) => <Message message={item} />}
            onContentSizeChange={handleChatListSizeChanging}
          />

          <Form ref={formRef}>
            <Input multiline placeholder="Send a message..." name="input" />
            <FeatherIconContainer onPress={handleSubmit}>
              <FeatherIcon name="send" size={20} />
            </FeatherIconContainer>
          </Form>
        </Container>

        <Sidebar />
      </Swiper>
    </KeyboardAvoidingView>
  );
};

export default Chat;
