import { ICompany } from './user-interfaces';

interface IEmployeeResponseLinks {
  active: boolean;
  label: string;
  url: string | null;
}

export interface IEmployeeResponseDataDetail {
  attendance_allowance_paid: number | null;
  audit_salary: number | null;
  bank_account_no: string | null;
  bank_name: string | null;
  basic_salary: number | null;
  card_number: string | null;
  company_id: number;
  contract_start_date: string | null;
  contracts: any[];
  created_at: string | null;
  deleted_at: string | null;
  department_id: number | null;
  department_name: string | null;
  dob: string | null;
  entitle_ot: number | null;
  family_card_number: string | null;
  gender: number;
  grade_id: number | null;
  grade_name: string | null;
  grade_prefix: string | null;
  health_insurance: number | null;
  health_insurance_no: string | null;
  home_address_1: string | null;
  home_address_2: string | null;
  id: number;
  ktp_no: string | null;
  manager_id: number | null;
  manager_name: string | null;
  marriage_code: string | null;
  marriage_id: number | null;
  meal_allowance: number | null;
  meal_allowance_paid: number | null;
  minimum_salary_used: string | null;
  mobile_no: string | null;
  mother_name: string | null;
  name: string | null;
  nc_id: string | null;
  old_staff_id: string | number | null;
  operational_allowance_paid: number | null;
  pob: string | null;
  position_id: number | null;
  position_name: string | null;
  remark: string | null;
  safety_insurance: number | null;
  safety_insurance_no: string | null;
  shift: string | null;
  staff_id: string;
  tel_no: string | null;
  type: string | null;
  updated_at: string | null;
}

export interface IEmployeeResponseData {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
  links: IEmployeeResponseLinks[];
  data: IEmployeeResponseDataDetail[];
}

export interface IEmployeeResponse {
  result: boolean;
  message: string;
  data: IEmployeeResponseData;
}

export interface IEmployeeParams {
  page: number;
  search: string;
}

export interface IEmployeeDetailData extends IEmployeeResponseDataDetail {
  benefits: any;
  company: ICompany;
  department: {
    code: string;
    company_id: number;
    created_at: string;
    id: number;
    name: string;
    updated_at: string | null;
  };
  marriage: {
    code: string;
    company_id: number;
    created_at: string;
    id: number;
    name: string;
    updated_at: string | null;
  };
}

export interface IEmployeeDetailResponse {
  result: boolean;
  message: string;
  data: IEmployeeDetailData;
}

export interface TInitialValuesEmployeeInformation {
  name: string | undefined;
  gender: number | string;
  mother_name: string | undefined;
  dob: string | undefined;
  pob: string | undefined;
  nc_id: undefined | string | number;
  ktp_no: undefined | string | number;
  home_address_1: string | undefined;
  home_address_2: string | undefined;
  mobile_no: undefined | string | number;
  tel_no: undefined | string | number;
  marriage_id: string | number | undefined;
  card_number: undefined | string | number;
  bank_account_no: undefined | string | number;
  bank_name: string | undefined;
  family_card_number: undefined | string | number;
  safety_insurance_no: undefined | string | number;
  health_insurance_no: undefined | string | number;
}

export interface IEmployeeInformationProps {
  initialValues: TInitialValuesEmployeeInformation;
  handleSubmit: (values: TInitialValuesEmployeeInformation, validation: boolean) => void;
}
