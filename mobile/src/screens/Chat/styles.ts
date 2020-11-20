import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import InputComponent from '../../components/Input';
import FormComponent from '../../components/Form';

export const Container = styled.View`
  flex: 1;
  padding: 15px 20px 20px;
`;

export const Input = styled(InputComponent)`
  max-height: 150px;
  flex: 1;
`;

export const Form = styled(FormComponent)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FeatherIcon = styled(Feather)`
  transform: rotate(45deg);
`;

export const FeatherIconContainer = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  padding-right: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;
