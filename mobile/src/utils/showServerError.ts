import { Alert } from 'react-native';
import { AxiosError } from 'axios';

interface ShowServerError {
  error: AxiosError;
  title: string;
}

export default function showServerError({
  error,
  title,
}: ShowServerError): void {
  if (error?.response?.data.error) {
    const { error: errorMessage } = error.response.data;

    Alert.alert(title, errorMessage);
  }
}
