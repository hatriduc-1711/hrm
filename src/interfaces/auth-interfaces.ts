export interface ISignInBody {
  username: string;
  password: string;
  company_id: number | string;
}

export interface IForgotPasswordBody {
  email: string;
}

export interface IResetPasswordBody {
  password: string;
  password_confirmation: string;
}

export interface ISignInResponse {
  result: boolean;
  message: string;
  data: { token: string };
}
