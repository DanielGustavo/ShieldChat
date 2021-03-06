import React, { useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { FormRef } from '../../components/Form';

import { useAuth } from '../../context/AuthContext';

import getValidationErrors from '../../utils/getValidationErrors';
import showServerError from '../../utils/showServerError';

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
  TextError,
} from './styles';

interface SignUpFormProps {
  username: string;
  password: string;
  password_confirmation: string;
}

const SignUp: React.FC = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const passwordInputRef = useRef<TextInput>(null);
  const passwordConfirmationInputRef = useRef<TextInput>(null);
  const formRef = useRef({} as FormRef);
  const { goBack } = useNavigation();
  const { signUp } = useAuth();

  async function handleSubmit() {
    try {
      formRef.current?.setFieldsErrors({});
      setFormError(null);

      const fields = formRef.current?.getFields() as SignUpFormProps;

      const schema = Yup.object().shape({
        username: Yup.string().min(5).required(),
        password: Yup.string().min(10).required(),
        password_confirmation: Yup.string()
          .required('password confirmation is required')
          .oneOf(
            [Yup.ref('password')],
            'password confirmation must be equal to the password field'
          ),
      });

      await schema.validate(fields, { abortEarly: false });

      await signUp(fields);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        const firstErrorMessage = Object.values(errors)[0];

        formRef.current?.setFieldsErrors(errors);
        setFormError(firstErrorMessage);
        return;
      }

      showServerError({ error, title: 'Authentication error' });
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
              onSubmitEditing={() => passwordInputRef?.current?.focus()}
            />
            <Input
              ref={passwordInputRef}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Password"
              secureTextEntry
              returnKeyType="next"
              name="password"
              onSubmitEditing={() =>
                passwordConfirmationInputRef?.current?.focus()
              }
            />
            <Input
              ref={passwordConfirmationInputRef}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Password confirmation"
              secureTextEntry
              returnKeyType="send"
              name="password_confirmation"
              onSubmitEditing={handleSubmit}
            />

            <Button onPress={handleSubmit}>Sign up</Button>
          </Form>
        </Container>

        <ImageBackground source={Wave}>
          <ReturnButtonContainer onPress={goBack}>
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
