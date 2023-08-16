import request from '~/configs/api-config';
import {
  IEmployeeDetailResponse,
  IEmployeeParams,
  IEmployeeResponse,
  IEmployeeResponseDataDetail,
} from '~/interfaces/employee-interfaces';
import API_PATH from '~/variables/api';

export const employee = async (param: IEmployeeParams) => {
  const response = await request<IEmployeeResponse>({
    method: 'GET',
    url: API_PATH.employee,
    params: param,
  });
  return response.data;
};

export const deleteEmployee = async (body: number[]) => {
  const response = await request({
    method: 'DELETE',
    url: API_PATH.deleteEmployee,
    data: {
      record_ids: body,
    },
  });
  return response.data;
};

export const employeeDetail = async (id: number) => {
  const response = await request<IEmployeeDetailResponse>({
    method: 'GET',
    url: `${API_PATH.deleteEmployee}/${id}`,
  });
  return response.data;
};

export const createEmployee = async (data: any) => {
  const response = await request({
    method: 'POST',
    url: API_PATH.deleteEmployee,
    data: data,
  });
  return response.data;
};

export const updateEmployee = async (data: IEmployeeResponseDataDetail) => {
  const response = await request({
    method: 'PUT',
    url: `${API_PATH.deleteEmployee}/${data.id}`,
    data: data,
  });
  return response.data;
};
