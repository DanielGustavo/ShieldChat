import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Background, Content } from './styles';
import { Button, Input } from '../../styles';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="ShieldChat logo" />

        <form>
          <div>
            <Input placeholder="username" required />
            <Input placeholder="password" type="password" required />
            <Input
              placeholder="password confirmation"
              type="password"
              required
            />
          </div>

          <Button>Sign up</Button>
          <Link to="/">
            <FiArrowLeft />
            <small>return</small>
          </Link>
        </form>
      </Content>
    </Container>
  );
};

export default SignUp;
