import React from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import Logo from '../../assets/images/logo.png';
import Wave from '../../assets/images/wave1.png';

import {
  Container,
  Input,
  Button,
  SignUpButtonView,
  SignUpButtonText,
  SignUpButtonContainer,
  Form,
  ImageBackground,
} from './styles';

const SignIn: React.FC = () => {
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
              returnKeyType="send"
            />

            <Button>Login</Button>
          </Form>
        </Container>

        <ImageBackground source={Wave}>
          <SignUpButtonContainer>
            <SignUpButtonView>
              <SignUpButtonText>Sign up</SignUpButtonText>
              <Feather name="arrow-right" color="#fff" size={18} />
            </SignUpButtonView>
          </SignUpButtonContainer>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
