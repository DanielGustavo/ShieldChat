import React, { useRef, useEffect, forwardRef } from 'react';
import {
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextInput as TextInputType,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useForm } from '../Form/Context';

import isARef from '../../utils/isARef';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  style?: StyleProp<ViewStyle>;
}

interface InputRef {
  value?: unknown;
  setValue: (value: unknown) => void;
}

const Input: React.ForwardRefRenderFunction<TextInputType, InputProps> = (
  { name, style, ...rest },
  fowardedRef
) => {
  const ref = useRef({} as TextInputType);
  const inputRef = useRef({} as InputRef);
  const { addInput, errors } = useForm();

  useEffect(() => {
    addInput({ name, ref: inputRef });
  }, [name, inputRef, addInput]);

  useEffect(() => {
    inputRef.current.setValue = (value: unknown) => {
      inputRef.current.value = value;

      if (!fowardedRef || !isARef(fowardedRef)) {
        ref.current?.setNativeProps({ text: value });
      } else {
        fowardedRef.current?.setNativeProps({ text: value });
      }
    };
  }, [ref, fowardedRef]);

  return (
    <Container style={style}>
      <TextInput
        ref={fowardedRef || ref}
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

export default forwardRef(Input);
