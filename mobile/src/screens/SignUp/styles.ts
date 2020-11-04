import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import ButtonComponent from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 40px 0 40px;
`;

export const Input = styled.TextInput`
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

export const ReturnButtonContainer = styled.TouchableWithoutFeedback``;

export const ReturnButtonView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${15 + getBottomSpace()}px;
`;

export const ReturnButtonText = styled.Text`
  color: #fff;
  font-family: 'Roboto-Medium';
  font-size: 18px;
  margin-left: 5px;
`;

export const Form = styled.View`
  width: 100%;
  margin: 100px 0 20px 0;
`;

export const ImageBackground = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: flex-end;
`;
