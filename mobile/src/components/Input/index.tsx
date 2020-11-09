import React, { useRef, useEffect } from 'react';
import { TextInputProps, StyleProp, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useForm } from '../Form/Context';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  style?: StyleProp<ViewStyle>;
}

interface InputRef {
  value?: unknown;
}

const Input: React.FC<InputProps> = ({ name, style, ...rest }) => {
  const inputRef = useRef({} as InputRef);
  const { addInput, errors } = useForm();

  useEffect(() => {
    addInput({ name, ref: inputRef });
  }, [name, inputRef, addInput]);

  return (
    <Container style={style}>
      <TextInput
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />

      {errors[name] && (
        <Feather color="#F05050" size={20} name="alert-circle" />
      )}
    </Container>
  );
};

export default Input;
