import { ICompanyInformationBody } from './company-interfaces';

export interface IUpdateValues {
  updateValue: (values: ICompanyInformationBody) => void;
}
