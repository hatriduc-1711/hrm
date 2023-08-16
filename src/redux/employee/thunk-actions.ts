import { createAsyncThunk } from '@reduxjs/toolkit';

import { employeeService } from '~/services';
import { EEmployeeThunkActions } from './constants';
import { IEmployeeParams, IEmployeeResponseDataDetail } from '~/interfaces/employee-interfaces';

export const getEmployeeList = createAsyncThunk(
  EEmployeeThunkActions.EMPLOYEE,
  async (params: IEmployeeParams, { rejectWithValue }) => {
    try {
      const response = await employeeService.employee(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteEmployee = createAsyncThunk(
  EEmployeeThunkActions.DELETE_EMPLOYEE,
  async (body: number[], { rejectWithValue }) => {
    try {
      await employeeService.deleteEmployee(body);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getEmployeeDetail = createAsyncThunk(
  EEmployeeThunkActions.GET_EMPLOYEE,
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await employeeService.employeeDetail(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const createEmployee = createAsyncThunk(
  EEmployeeThunkActions.CREATE_EMPLOYEE,
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await employeeService.createEmployee(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const Employupdateee = createAsyncThunk(
  EEmployeeThunkActions.UPDATE_EMPLOYEE,
  async (data: IEmployeeResponseDataDetail, { rejectWithValue }) => {
    try {
      const response = await employeeService.updateEmployee(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
