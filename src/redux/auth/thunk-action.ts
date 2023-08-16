import { createAsyncThunk } from '@reduxjs/toolkit';

import { IForgotPasswordBody, IResetPasswordBody, ISignInBody } from '~/interfaces/auth-interfaces';
import { authService } from '~/services';
import { EAuthThunkActions } from './constants';

export const login = createAsyncThunk(EAuthThunkActions.LOGIN, async (body: ISignInBody, { rejectWithValue }) => {
  try {
    const data = await authService.login(body);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const forgotPassword = createAsyncThunk(
  EAuthThunkActions.FORGOT_PASSWORD,
  async (body: IForgotPasswordBody, { rejectWithValue }) => {
    try {
      const data = await authService.forgotPassword(body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const resetPassword = createAsyncThunk(
  EAuthThunkActions.RESET_PASSWORD,
  async (body: IResetPasswordBody, { rejectWithValue }) => {
    try {
      const data = await authService.resetPassword(body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk(EAuthThunkActions.LOGOUT, async (_, { rejectWithValue }) => {
  try {
    const data = await authService.signOut();
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
