import * as Yup from 'yup';

interface Errors {
  [index: string]: string;
}

export default function getValidationErrors(
  error: Yup.ValidationError
): Errors {
  const errors = {} as Errors;

  error.inner.forEach(({ path, message }) => {
    errors[path] = message;
  });

  return errors;
}
