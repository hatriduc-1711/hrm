import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useFormik } from 'formik';

import Text from '~/components/Text';
import WrapForm from '../components/WrapForm';
import InputDefault from '~/components/Input/InputDefault';
import ButtonDefault from '~/components/Button/ButtonDefault';
import ROUTER from '~/variables/router';
import colors from '~/themes/colors';
import ErrorResponse from '~/interfaces/error-response-interfaces';
import { IForgotPasswordBody } from '~/interfaces/auth-interfaces';
import { forgotPasswordSchema } from '~/utils/validation-util';
import { showErrorMessage } from '~/utils/toast-util';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import { authThunkActions } from '~/redux/auth';
import { EAuthThunkActions } from '~/redux/auth/constants';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading[EAuthThunkActions.FORGOT_PASSWORD]);

  const handleRequest = async (values: IForgotPasswordBody) => {
    try {
      await dispatch(authThunkActions.forgotPassword(values)).unwrap();
      navigate(ROUTER.login);
      resetForm();
    } catch (error) {
      const errorMessage = (error as ErrorResponse).message;
      showErrorMessage(errorMessage);
    }
  };

  const { values, errors, touched, handleChange, handleSubmit, resetForm } = useFormik<IForgotPasswordBody>({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: handleRequest,
  });

  return (
    <Stack direction={'column'} alignItems={'center'} marginTop={'80px'} spacing={'20px'} flex={1}>
      <Text component={'h3'} type="h3">
        Forgot password
      </Text>
      <WrapForm>
        <InputDefault
          id="email"
          name="email"
          label="Your work email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && errors.email}
        />
        <ButtonDefault customButtonStyles={{ marginTop: '16px' }} onClick={handleSubmit} loading={loading}>
          Confirm & Send OTP
        </ButtonDefault>
        <Link to={ROUTER.login} style={{ textAlign: 'center', textDecoration: 'none', marginTop: '6px' }}>
          <Text
            type="h8"
            component={'span'}
            color={colors.blue.step9}
            customStyle={{ '&:hover': { textDecoration: 'underline' } }}
          >
            Back to Sign In
          </Text>
        </Link>
      </WrapForm>
    </Stack>
  );
};

export default ForgotPassword;
