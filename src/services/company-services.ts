import request from '~/configs/api-config';
import { ICompanyInformationBody } from '~/interfaces/company-interfaces';
import API_PATH from '~/variables/api';

export const changeCompanyInformation = async (data: ICompanyInformationBody) => {
  const response = await request({
    method: 'POST',
    url: API_PATH.company,
    data: data,
  });
  return response.data;
};
