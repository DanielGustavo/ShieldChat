import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Container, Background, Content, Inputs } from './styles';
import { Button } from '../../styles';

import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';
import showServerError from '../../utils/showServerError';

import logo from '../../assets/logo.svg';

import { useAuth } from '../../context/AuthContext';

interface SignUpFormData {
  username: string;
  password: string;
  password_confirmation: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signUp } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

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

        await schema.validate(data, { abortEarly: false });

        const { username, password, password_confirmation } = data;
        await signUp({ username, password, password_confirmation });

        toast('Registered successfully', { type: toast.TYPE.SUCCESS });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }

        showServerError(error);
      }
    },
    [signUp]
  );

  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="ShieldChat logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Inputs>
            <Input name="username" placeholder="username" />
            <Input name="password" placeholder="password" type="password" />
            <Input
              name="password_confirmation"
              placeholder="password confirmation"
              type="password"
            />
          </Inputs>

          <Button>Sign up</Button>
          <Link to="/signin">
            <FiArrowLeft />
            <small>return</small>
          </Link>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
