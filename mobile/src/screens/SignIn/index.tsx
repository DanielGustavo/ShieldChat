import React, { useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { FormRef } from '../../components/Form';

import getValidationErrors from '../../utils/getValidationErrors';

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
  TextError,
} from './styles';

const SignIn: React.FC = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const formRef = useRef({} as FormRef);
  const { navigate } = useNavigation();

  async function handleSubmit() {
    try {
      formRef.current?.setFieldsErrors({});
      setFormError(null);

      const fields = formRef.current?.getFields();

      const schema = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required(),
      });

      await schema.validate(fields, { abortEarly: false });

      Alert.alert('Form Validation', 'the fields are valid');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        const firstErrorMessage = Object.values(errors)[0];

        formRef.current?.setFieldsErrors(errors);
        setFormError(firstErrorMessage);
      }
    }
  }

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

          <Form ref={formRef}>
            {formError && <TextError>{formError}</TextError>}

            <Input
              placeholder="Username"
              returnKeyType="next"
              textContentType="nickname"
              name="username"
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Password"
              secureTextEntry
              returnKeyType="send"
              name="password"
              onSubmitEditing={handleSubmit}
            />

            <Button onPress={handleSubmit}>Login</Button>
          </Form>
        </Container>

        <ImageBackground source={Wave}>
          <SignUpButtonContainer onPress={() => navigate('SignUp')}>
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
