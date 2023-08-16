import { createAsyncThunk } from '@reduxjs/toolkit';

import { userService } from '~/services';
import { EUserThunkActions } from './constants';

export const userDetail = createAsyncThunk(EUserThunkActions.USER_DETAIL, async (_, { rejectWithValue }) => {
  try {
    const response = await userService.userDetail();
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
