import * as Yup from 'yup';

export const loginFormValidationSchema = Yup.object().shape({
  username: Yup.string().max(30, 'Username maximum to 30 characters').required('Please enter username'),
  password: Yup.string()
    .min(8, 'Password minimum to 8 characters')
    .max(16, 'Password maximum to 16 characters')
    .required('Please enter password'),
  company_id: Yup.number().required('Please choose factory'),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Please enter email'),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password minimum to 8 characters')
    .max(16, 'Password maximum to 16 characters')
    .required('Please enter password'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'The passwords do not match')
    .required('Please enter confirm password'),
});

export const changeCompanyInformationSchema = Yup.object().shape({
  full_name: Yup.string().required('Please input Company Name'),
  address: Yup.string(),
  tel_no: Yup.string(),
});

export const employeeInformationSchema = Yup.object().shape({
  name: Yup.string().required('Please input name'),
  mother_name: Yup.string(),
  gender: Yup.number().required('Please input gender'),
  dob: Yup.string().required('Please input Date of birth'),
  pob: Yup.string(),
  nc_id: Yup.number().required('Please input National Card ID'),
  ktp_no: Yup.number().required('Please input KTP No'),
  home_address_1: Yup.string(),
  home_address_2: Yup.string(),
  mobile_no: Yup.number(),
  tel_no: Yup.number(),
  marriage_id: Yup.number(),
  card_number: Yup.number(),
  bank_account_no: Yup.number(),
  bank_name: Yup.string(),
  family_card_number: Yup.number(),
  safety_insurance_no: Yup.number(),
  health_insurance_no: Yup.number(),
});

export const contractInformationSChema = Yup.object().shape({
  contract_start_date: Yup.string().required('Please input Date Start'),
  type: Yup.number().required('Please input Employee Type'),
});

export const SalaryWagesSchema = Yup.object().shape({
  basic_salary: Yup.number().required('Please input Basic Salary'),
  audit_salary: Yup.number().required('Please input Audit Salary'),
  safety_insurance: Yup.number().required('Please input Safety Insurance Amount'),
  health_insurance: Yup.number(),
  meal_allowance: Yup.number().required('Please input Meal Allowance'),
});
