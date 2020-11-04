import React from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import Logo from '../../assets/images/logo.png';
import Wave from '../../assets/images/wave2.png';

import {
  Container,
  Input,
  Button,
  ReturnButtonView,
  ReturnButtonText,
  ReturnButtonContainer,
  Form,
  ImageBackground,
} from './styles';

const SignUp: React.FC = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Image source={Logo} />

          <Form>
            <Input
              placeholder="Username"
              returnKeyType="next"
              textContentType="nickname"
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Password"
              secureTextEntry
              returnKeyType="next"
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Password confirmation"
              secureTextEntry
              returnKeyType="send"
            />

            <Button>Sign up</Button>
          </Form>
        </Container>

        <ImageBackground source={Wave}>
          <ReturnButtonContainer>
            <ReturnButtonView>
              <Feather name="arrow-left" color="#fff" size={18} />
              <ReturnButtonText>Return</ReturnButtonText>
            </ReturnButtonView>
          </ReturnButtonContainer>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
