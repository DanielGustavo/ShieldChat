import styled, { css } from 'styled-components/native';

interface MessageProps {
  owner: boolean;
}

export const MessageUsernameText = styled.Text`
  margin-bottom: 5px;
  font-family: 'Roboto-Bold';
  color: #fff;
`;

export const MessageText = styled.Text`
  font-family: 'Roboto-Regular';
  color: #fff;
`;

export const Container = styled.View<MessageProps>`
  background: ${({ owner = false }) => {
    return owner ? '#716EE8' : '#5F6D7A';
  }};
  align-self: ${({ owner = false }) => {
    return owner ? 'flex-end' : 'flex-start';
  }};
  min-width: 100px;
  max-width: 400px;
  padding: 5px 15px;
  border-radius: 19px;
  margin-bottom: 10px;

  ${({ owner }) => {
    return owner
      ? css`
          border-top-right-radius: 0;
        `
      : css`
          border-top-left-radius: 0;
        `;
  }}
`;
