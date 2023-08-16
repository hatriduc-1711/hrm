export interface IUserDetailResponse {
  result: boolean;
  message: string;
  data: IUserDetail;
}

interface IAuthorities {
  read: boolean;
  add: boolean;
  edit: boolean;
  export: boolean;
  unlock: boolean;
}

export interface ICompany {
  id: number;
  name: string;
  prefix: string;
  created_at: string;
  updated_at: string;
  full_name: string;
  address: string;
  tel_no: string;
}

export interface IUserDetail {
  id: number;
  username: string;
  email: string;
  role_id: number;
  employee_id: number | null;
  department_id: number | null;
  company_id: number;
  register_token: string | null;
  email_verified_at: string | null;
  is_active: string | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
  department_name: string | null;
  position_name: string | null;
  permissions: {
    attendance_record: IAuthorities;
    ot_record: IAuthorities;
    leave: IAuthorities;
    payroll_audit: IAuthorities;
    payroll_actual: IAuthorities;
    manage_employee: IAuthorities;
    manage_account: IAuthorities;
    global_setting: IAuthorities;
    setting: IAuthorities;
  };
  company: ICompany;
  department: {
    id: number;
    code: string;
    company_id: number;
    created_at: string;
    updated_at: string;
    name: string;
  };
}
