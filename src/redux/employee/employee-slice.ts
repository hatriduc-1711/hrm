import { createSlice } from '@reduxjs/toolkit';
import * as employeeThunkActions from './thunk-actions';
import { IEmployeeDetailData } from '~/interfaces/employee-interfaces';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employeeDetail: {} as IEmployeeDetailData,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(employeeThunkActions.getEmployeeDetail.fulfilled, (state, action) => {
      state.employeeDetail = action.payload;
    });
  },
});

export default employeeSlice.reducer;
