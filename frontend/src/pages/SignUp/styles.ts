import styled from 'styled-components';

import signInBackground from '../../assets/signUpBackground.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;

  img {
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;

    a {
      margin-top: 5px;
      text-decoration: none;
      color: var(--color-white);
      display: flex;
      align-items: center;
      justify-content: center;

      small {
        margin-bottom: 2px;
      }
    }

    div {
      width: 100%;
      margin-bottom: 40px;

      input + input {
        margin-top: 8px;
      }
    }
  }
`;

export const Background = styled.div`
  background: url(${signInBackground}) no-repeat right;
  background-size: cover;
  flex: 1;
`;
