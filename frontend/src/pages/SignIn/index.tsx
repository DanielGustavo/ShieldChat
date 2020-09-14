import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Container, Background, Content, Inputs } from './styles';
import { Button } from '../../styles';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';

import logo from '../../assets/logo.svg';

interface SignInFormProps {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignInFormProps) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required(),
      });

      await schema.validate(data, { abortEarly: false });
      alert('submited');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="ShieldChat logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Inputs>
            <Input name="username" placeholder="username" />
            <Input name="password" placeholder="password" type="password" />
          </Inputs>

          <Button>Login</Button>
          <span>
            <small>or</small>
          </span>
          <Link to="signup">
            <Button type="button" filled={false}>
              Sign up
            </Button>
          </Link>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
