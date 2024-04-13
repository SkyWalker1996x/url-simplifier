import { AxiosError } from 'axios';

export const errorToMessage = (error: AxiosError): string => {
  return error.message;
};
