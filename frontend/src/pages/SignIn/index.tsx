import React from 'react';

import { Container, Background, Content } from './styles';
import { Button, Input } from '../../styles';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="ShieldChat logo" />

        <form>
          <div>
            <Input placeholder="username" required />
            <Input placeholder="password" type="password" required />
          </div>

          <Button>Login</Button>
          <span>
            <small>or</small>
          </span>
          <Button filled={false}>Sign up</Button>
        </form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;