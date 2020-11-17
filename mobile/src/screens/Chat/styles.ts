import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  padding: 15px 20px 20px;
`;

export const TextInputContainer = styled.View`
  background-color: #fff;
  padding: 14px 18px;
  border-radius: 30px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  flex: 1;
  max-height: 150px;
`;

export const FeatherIcon = styled(Feather)`
  transform: rotate(45deg);
`;
