import { Paper, Stack } from '@mui/material';
import { useFormik } from 'formik';

import useStyles from './styles';
import Navbar from '~/layouts/components/Navbar';
import Text from '~/components/Text';
import InputDefault from '~/components/Input/InputDefault';
import Divider from '~/components/Divider';
import ButtonDefault from '~/components/Button/ButtonDefault';
import ErrorResponse from '~/interfaces/error-response-interfaces';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import { resetPasswordSchema } from '~/utils/validation-util';
import { showErrorMessage, showSuccessMessage } from '~/utils/toast-util';
import { IResetPasswordBody } from '~/interfaces/auth-interfaces';
import { authThunkActions } from '~/redux/auth';
import { EAuthThunkActions } from '~/redux/auth/constants';

const ResetPassword = () => {
  const { classes, cx } = useStyles();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading[EAuthThunkActions.RESET_PASSWORD]);

  const handleResetPassword = async (values: IResetPasswordBody) => {
    try {
      await dispatch(authThunkActions.resetPassword(values));
      resetForm();
      showSuccessMessage('Successful change');
    } catch (error) {
      const message = (error as ErrorResponse).message;
      showErrorMessage(message);
    }
  };

  const { errors, touched, handleChange, handleSubmit, values, resetForm } = useFormik<IResetPasswordBody>({
    initialValues: {
      password: '',
      password_confirmation: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: handleResetPassword,
  });

  return (
    <>
      <Navbar />
      <Text type="h3" component={'h3'}>
        Settings
      </Text>
      <Paper className={cx(classes.paper)}>
        <Text type="h4" component={'h4'}>
          Change Password
        </Text>
        <Divider />
        <Stack direction={'column'} width={'272px'} margin={'0 10px'} gap={'10px'}>
          <InputDefault
            id="password"
            name="password"
            label="New Password"
            type="password"
            value={values.password}
            error={touched.password && errors.password}
            onChange={handleChange}
          />
          <InputDefault
            id="password_confirmation"
            name="password_confirmation"
            label="Confirm Password"
            type="password"
            value={values.password}
            error={touched.password && errors.password}
            onChange={handleChange}
          />
          <ButtonDefault customButtonStyles={{ marginTop: '20px' }} onClick={handleSubmit} loading={loading}>
            Confirm
          </ButtonDefault>
        </Stack>
      </Paper>
    </>
  );
};

export default ResetPassword;
