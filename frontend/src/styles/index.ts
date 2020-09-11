import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  filled?: boolean;
}

export const Input = styled.input`
  &::placeholder {
    color: #c9c9c9;
  }

  width: 100%;
  border: var(--color-white) solid 2px;
  border-radius: 5px;
  padding: 14px 10px;
  background: none;
  color: var(--color-white);
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
