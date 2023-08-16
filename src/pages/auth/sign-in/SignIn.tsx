import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';

import Text from '~/components/Text';
import SelectApp from '~/components/Select/Select';
import WrapForm from '../components/WrapForm';
import InputDefault from '~/components/Input/InputDefault';
import ButtonDefault from '~/components/Button/ButtonDefault';
import ROUTER from '~/variables/router';
import colors from '~/themes/colors';
import ErrorResponse from '~/interfaces/error-response-interfaces';
import { ISignInBody } from '~/interfaces/auth-interfaces';
import { loginFormValidationSchema } from '~/utils/validation-util';
import { showErrorMessage } from '~/utils/toast-util';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import { authThunkActions } from '~/redux/auth';
import { EAuthThunkActions } from '~/redux/auth/constants';
import { EUserThunkActions } from '~/redux/user/constants';
import { userThunkActions } from '~/redux/user';

const SignInPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSignIn = useAppSelector((state) => state.loading[EAuthThunkActions.LOGIN]);
  const isGetUserDetail = useAppSelector((state) => state.loading[EUserThunkActions.USER_DETAIL]);

  const handleLogin = async (values: ISignInBody) => {
    try {
      const response = await dispatch(authThunkActions.login(values)).unwrap();
      Cookies.set('token', response.data.token);
      await dispatch(userThunkActions.userDetail());
      navigate(ROUTER.home);
      resetForm();
    } catch (error) {
      const errorMessage = (error as ErrorResponse).message;
      showErrorMessage(errorMessage);
    }
  };

  const { values, errors, touched, handleChange, handleSubmit, resetForm } = useFormik<ISignInBody>({
    initialValues: {
      username: '',
      password: '',
      company_id: '',
    },
    validationSchema: loginFormValidationSchema,
    onSubmit: handleLogin,
  });

  return (
    <Stack direction={'column'} alignItems={'center'} marginTop={'32px'} spacing={'20px'} flex={1}>
      <Text component={'h3'} type="h3">
        Sign In
      </Text>
      <WrapForm>
        <InputDefault
          id="username"
          name="username"
          label="Username"
          value={values.username}
          onChange={handleChange}
          error={touched.username && errors.username}
        />
        <InputDefault
          id="password"
          name="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && errors.password}
        />
        <SelectApp
          id="company_id"
          name="company_id"
          label="Factory"
          value={values.company_id}
          onChange={handleChange}
          error={touched.company_id && errors.company_id}
          menu={[
            { name: 'SBM', value: 1 },
            { name: 'DMF', value: 2 },
          ]}
        />
        <ButtonDefault
          customButtonStyles={{ marginTop: '16px' }}
          onClick={handleSubmit}
          loading={isSignIn || isGetUserDetail}
        >
          Sign In
        </ButtonDefault>
        <Link to={ROUTER.forgotPassword} style={{ textAlign: 'center', textDecoration: 'none', marginTop: '6px' }}>
          <Text
            type="h8"
            component={'span'}
            color={colors.blue.step9}
            customStyle={{ '&:hover': { textDecoration: 'underline' } }}
          >
            Forgot Your Password?
          </Text>
        </Link>
      </WrapForm>
    </Stack>
  );
};

export default SignInPage;
