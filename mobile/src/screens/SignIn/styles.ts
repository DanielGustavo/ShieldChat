import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import ButtonComponent from '../../components/Button';
import FormComponent from '../../components/Form';
import InputComponent from '../../components/Input';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 40px 0 40px;
`;

export const TextError = styled.Text`
  color: #f05050;
  margin-bottom: 15px;
  font-size: 15px;
  font-family: 'Roboto-Regular';
`;

export const Input = styled(InputComponent)`
  background-color: #fff;
  font-family: 'Roboto-Regular';
  font-size: 18px;
  padding: 14px 18px;
  border-radius: 30px;
  margin-bottom: 10px;
  width: 100%;
`;

export const Button = styled(ButtonComponent)`
  margin-top: 20px;
`;

export const SignUpButtonContainer = styled.TouchableWithoutFeedback``;

export const SignUpButtonView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${15 + getBottomSpace()}px;
`;

export const SignUpButtonText = styled.Text`
  color: #fff;
  font-family: 'Roboto-Medium';
  font-size: 18px;
  margin-right: 5px;
`;

export const Form = styled(FormComponent)`
  width: 100%;
  margin: 100px 0 20px 0;
  align-items: center;
`;

export const ImageBackground = styled.ImageBackground.attrs({
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: flex-end;
`;
