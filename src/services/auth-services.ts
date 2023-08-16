import request from '~/configs/api-config';
import { IForgotPasswordBody, IResetPasswordBody, ISignInBody, ISignInResponse } from '~/interfaces/auth-interfaces';
import API_PATH from '~/variables/api';

export const login = async (body: ISignInBody) => {
  const response = await request<ISignInResponse>({
    method: 'POST',
    url: API_PATH.login,
    data: body,
  });
  return response.data;
};

export const forgotPassword = async (body: IForgotPasswordBody) => {
  const response = await request({
    method: 'POST',
    url: API_PATH.forgotPassword,
    data: body,
  });
  return response.data;
};

export const resetPassword = async (body: IResetPasswordBody) => {
  const response = await request({
    method: 'POST',
    url: API_PATH.changePassword,
    data: body,
  });
  return response.data;
};

export const signOut = async () => {
  const response = await request({
    method: 'POST',
    url: API_PATH.logout,
  });
  return response.data;
};
