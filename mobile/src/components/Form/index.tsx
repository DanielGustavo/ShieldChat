import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { View } from 'react-native';

import { FormContext, Inputs, addInputProps, Errors } from './Context';

interface Fields {
  [name: string]: unknown;
}

export interface FormRef {
  getFields: () => unknown;
  setFieldsErrors: (errors: Errors) => void;
  setFields: (fields: Fields) => void;
}

interface FormProps {
  children: React.ReactNode;
}

const Form: React.ForwardRefRenderFunction<FormRef, FormProps> = (
  { children, ...rest },
  formRef
) => {
  const [inputs, setInputs] = useState({} as Inputs);
  const [errors, setErrors] = useState({} as Errors);

  const addInput = useCallback(({ name, ref }: addInputProps) => {
    const newInput = { [name]: ref };
    setInputs((currentInputs) => ({ ...currentInputs, ...newInput }));
  }, []);

  useImperativeHandle(
    formRef,
    () => ({
      getFields: () => {
        const fields = {} as Fields;

        Object.entries(inputs).forEach(([name, ref]) => {
          const field = { [name]: ref.current?.value };

          Object.assign(fields, field);
        });

        return fields;
      },
      setFieldsErrors: (fieldsErrors) => {
        setErrors(fieldsErrors);
      },
      setFields: (fields) => {
        Object.entries(fields).forEach(([name, value]) => {
          const input = inputs[name];

          input.current?.setValue(value);
        });
      },
    }),
    [inputs]
  );

  return (
    <View {...rest}>
      <FormContext.Provider value={{ addInput, errors }}>
        {children}
      </FormContext.Provider>
    </View>
  );
};

export default forwardRef(Form);
