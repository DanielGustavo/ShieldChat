import styled from 'styled-components';

import signInBackground from '../../assets/signInBackground.png';

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

    span {
      text-align: center;
      margin: 8px 0;
      color: #c9c9c9;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:before {
        content: '';
        background: #c9c9c9;
        height: 1px;
        display: block;
        width: 40%;
      }

      &:after {
        content: '';
        background: #c9c9c9;
        height: 1px;
        display: block;
        width: 40%;
      }
    }

    a {
      button {
        width: 100%;
      }
    }
  }
`;

export const Inputs = styled.div`
  width: 100%;
  margin-bottom: 40px;

  div + div {
    margin-top: 8px;
  }
`;

export const Background = styled.div`
  background: url(${signInBackground}) no-repeat left;
  background-size: cover;
  flex: 1;
`;
