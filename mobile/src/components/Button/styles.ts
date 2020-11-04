import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #9b99e0;
  padding: 10px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #fff;
  font-size: 25px;
`;
