import request from '~/configs/api-config';
import { IUserDetailResponse } from '~/interfaces/user-interfaces';
import API_PATH from '~/variables/api';

export const userDetail = async () => {
  const response = await request<IUserDetailResponse>({
    method: 'GET',
    url: API_PATH.userDetail,
  });
  return response.data;
};
