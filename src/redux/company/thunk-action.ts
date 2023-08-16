import { createAsyncThunk } from '@reduxjs/toolkit';

import { companyService } from '~/services';
import { ECompanyThunkActions } from './constants';
import { ICompanyInformationBody } from '~/interfaces/company-interfaces';

export const changeCompanyInformation = createAsyncThunk(
  ECompanyThunkActions.CHANGE_INFORMATION,
  async (body: ICompanyInformationBody, { rejectWithValue }) => {
    try {
      await companyService.changeCompanyInformation(body);
      return body;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
