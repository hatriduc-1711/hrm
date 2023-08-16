import { lazy } from 'react';

export const HomePage = lazy(() => import('~/pages/home'));
export const EmployeePage = lazy(() => import('~/pages/employee-management/employee'));
export const AddEmployeePage = lazy(() => import('~/pages/employee-management/add-and-edit-employee/AddEmployee'));
export const EditEmployeePage = lazy(() => import('~/pages/employee-management/add-and-edit-employee/EditEmployee'));
export const AuthLoginPage = lazy(() => import('~/pages/auth/sign-in'));
export const AuthForgotPasswordPage = lazy(() => import('~/pages/auth/forgot-password'));
// export const AuthResetPasswordPage = lazy(() => import('~/pages/Auth/ResetPassword'));
export const SettingsPage = lazy(() => import('~/pages/settings/Settings'));
export const SettingResetPasswordPage = lazy(() => import('~/pages/settings/ResetPassword'));
export const SettingsChangeCompanyInformation = lazy(() => import('~/pages/settings/ChangeCompanyInformation'));
export const NotFoundPage = lazy(() => import('~/pages/not-found'));
