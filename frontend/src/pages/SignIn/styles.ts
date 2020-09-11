import styled, { css } from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/signInBackground.png';

interface ButtonProps {
  filled?: boolean;
}

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

    div {
      width: 100%;
      margin-bottom: 40px;

      input {
        & + input {
          margin-top: 8px;
        }

        &::placeholder {
          color: #c9c9c9;
        }

        width: 100%;
        border: var(--color-white) solid 2px;
        border-radius: 5px;
        padding: 14px 10px;
        background: none;
        color: var(--color-white);
      }
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  background: ${({ filled = true }) => {
    return filled ? css`var(--color-white)` : css`none`;
  }};
  color: ${({ filled = true }) => {
    return filled ? css`var(--color-black)` : css`var(--color-white)`;
  }};
  border: var(--color-white) solid 2px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 15px;
  padding: 18px;
  transition: 0.4s;

  &:hover {
    background: ${({ filled = true }) => {
      return filled ? shade(0.5, '#FFF') : shade(0.5, '#24292E');
    }};
    color: ${({ filled = true }) => {
      return filled ? shade(0.1, '#24292E') : shade(0.1, '#FFF');
    }};
  }

  &:active {
    transition: 0.2s;
    background: ${({ filled = true }) => {
      return filled ? css`var(--color-theme)` : css`var(--color-theme)`;
    }};
    color: ${({ filled = true }) => {
      return filled ? css`var(--color-white)` : css`var(--color-black)`;
    }};
  }
`;

export const Background = styled.div`
  background: url(${signInBackground}) no-repeat left;
  background-size: cover;
  flex: 1;
`;
