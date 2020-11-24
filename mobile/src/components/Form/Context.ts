import { createContext, useContext } from 'react';

export interface InputRef {
  current: {
    value?: unknown;
    setValue: (value: unknown) => void;
  };
}

export interface Errors {
  [inputName: string]: string | undefined;
}

export interface addInputProps {
  name: string;
  ref: InputRef;
}

export interface Inputs {
  [name: string]: InputRef;
}

interface FormProviderValue {
  addInput: (props: addInputProps) => void;
  errors: Errors;
}

export const FormContext = createContext({} as FormProviderValue);

export function useForm(): FormProviderValue {
  return useContext(FormContext);
}
