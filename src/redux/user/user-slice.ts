import { createSlice } from '@reduxjs/toolkit';
import { IUserDetail } from '~/interfaces/user-interfaces';
import * as userThunkActions from './thunk-actions';
import { companyThunkActions } from '../company';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userDetail: {} as IUserDetail,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userThunkActions.userDetail.fulfilled, (state, action) => {
      state.userDetail = action.payload;
    });
    builder.addCase(companyThunkActions.changeCompanyInformation.fulfilled, (state, action) => {
      state.userDetail.company = { ...state.userDetail.company, ...action.payload };
    });
  },
});

export default userSlice.reducer;
