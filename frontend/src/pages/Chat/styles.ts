import styled, { css } from 'styled-components';

interface UserProps {
  owner?: boolean;
}

interface MessageProps {
  owner?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const User = styled.div<UserProps>`
  background: ${({ owner = false }) => {
    return owner ? css`var(--color-theme-dark)` : css`var(--color-light-gray)`;
  }};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: none;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      transition: 0.4s;

      &:hover {
        transition: 0.4s;
        cursor: pointer;
        color: var(--color-black);
      }

      &:active {
        transition: 0s;
        color: var(--color-red);
      }
    }
  }
`;

export const Sidebar = styled.aside`
  background: var(--color-gray);
  padding: 15px 15px;
  width: 20%;
  height: 100%;
  overflow-y: auto;

  ${User} + ${User} {
    margin-top: 10px;
  }
`;

export const Message = styled.div<MessageProps>`
  background: ${({ owner = false }) => {
    return owner ? css`var(--color-theme-dark)` : css`var(--color-light-gray)`;
  }};
  align-self: ${({ owner = false }) => {
    return owner ? 'flex-end' : 'flex-start';
  }};
  width: fit-content;
  min-width: 100px;
  max-width: 400px;
  padding: 5px 15px;
  border-radius: ${({ owner = false }) => {
    return owner ? css`19px 0 19px 19px` : css`0 19px 19px 19px`;
  }};

  span {
    margin-bottom: 5px;
    display: block;
    font-weight: 500;
  }

  p {
    word-break: break-word;
    white-space: pre-wrap;
  }
`;

export const MessagesWrapper = styled.div`
  background: var(--color-black);
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 5px;

  ${Message} + ${Message} {
    margin-top: 10px;
  }
`;

export const ChatWrapper = styled.div`
  width: 100%;
  padding: 15px 50px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.div`
  display: flex;
  justify-self: flex-end;
  background: var(--color-white);
  padding: 15px 25px;
  border-radius: 73px;
  margin-top: 15px;

  input {
    flex: 1;
    background: none;
    border: 0;

    &::placeholder {
      color: var(--color-gray);
    }
  }

  button {
    background: none;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: block;
      transform: rotate(45deg);
    }
  }
`;
