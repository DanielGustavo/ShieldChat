import styled from 'styled-components/native';
import { TextInput as TextInputComponent, View } from 'react-native';

export const Container = styled(View)`
  background-color: #fff;
  padding: 14px 18px;
  border-radius: 30px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled(TextInputComponent)`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  flex: 1;
`;
