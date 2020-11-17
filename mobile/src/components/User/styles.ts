import styled from 'styled-components/native';

interface UserProps {
  owner: boolean;
}

export const Container = styled.View<UserProps>`
  background: ${({ owner }) => {
    return owner ? '#716EE8' : '#5F6D7A';
  }};
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Text = styled.Text`
  color: #fff;
  font-family: 'Roboto-Medium';
  font-size: 18px;
`;
