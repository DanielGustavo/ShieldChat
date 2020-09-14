import React, { useRef, useEffect, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, ErrorBox } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }: InputProps) => {
  const inputRef = useRef(null);
  const { defaultValue, error, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, inputRef, registerField]);

  return (
    <Container>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && (
        <ErrorBox>
          <FiAlertCircle size={20} />
          <div>
            <p>{error}</p>
          </div>
        </ErrorBox>
      )}
    </Container>
  );
};

export default Input;
