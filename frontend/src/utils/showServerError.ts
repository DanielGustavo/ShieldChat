import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

export default function showServerError(error: AxiosError): void {
  if (error?.response?.data?.error) {
    const { data: errorData } = error.response;

    toast(errorData.error, { type: toast.TYPE.ERROR });
  }
}
