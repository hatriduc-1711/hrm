/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import ErrorResponse, { TErrorResponseData } from '~/interfaces/error-response-interfaces';
import ROUTER from '~/variables/router';

const request = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

request.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get('token');
    config.headers['Authorization'] = accessToken ? `Bearer ${accessToken}` : '';
    return config;
  },
  (error) => Promise.reject(error),
);

request.interceptors.response.use(
  (response) => response,
  (error: AxiosError<TErrorResponseData>) => {
    if (error.response?.status === 401) {
      Cookies.remove('token');
      window.location.pathname = ROUTER.login;
      throw new ErrorResponse('Login session expired');
    }
    if (error.response) {
      const errorResponseData = error.response.data;
      const errorMessage = errorResponseData.message;
      throw new ErrorResponse(errorMessage, errorResponseData);
    }
    return Promise.reject(error);
  },
);

export default request;
