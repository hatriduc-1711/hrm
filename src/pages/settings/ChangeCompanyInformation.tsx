import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import { Form, Formik } from 'formik';

import useStyles from './styles';
import Navbar from '~/layouts/components/Navbar';
import InputDefault from '~/components/Input/InputDefault';
import Text from '~/components/Text';
import ButtonDefault from '~/components/Button/ButtonDefault';
import colors from '~/themes/colors';
import ErrorResponse from '~/interfaces/error-response-interfaces';
import ROUTER from '~/variables/router';
import { useAppSelector, useAppDispatch } from '~/redux/store';
import { UpdateValue } from '~/utils/auto-submit-utils';
import { userDetailsSelector } from '~/redux/selectors';
import { ICompanyInformationBody } from '~/interfaces/company-interfaces';
import { changeCompanyInformationSchema } from '~/utils/validation-util';
import { showErrorMessage, showSuccessMessage } from '~/utils/toast-util';
import { companyThunkActions } from '~/redux/company';
import { ECompanyThunkActions } from '~/redux/company/constants';

const ChangeCompanyInformation = () => {
  const { classes, cx } = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userDetail = useAppSelector(userDetailsSelector);
  const loading = useAppSelector((state) => state.loading[ECompanyThunkActions.CHANGE_INFORMATION]);
  const [companyInformation, setCompanyInformation] = useState<ICompanyInformationBody>({
    full_name: userDetail.company.full_name,
    address: userDetail.company.address,
    tel_no: userDetail.company.tel_no,
  });

  const handleChangeInformation = async () => {
    try {
      await dispatch(companyThunkActions.changeCompanyInformation(companyInformation));
      showSuccessMessage('Successful change !');
      navigate(ROUTER.settings);
    } catch (error) {
      const errorMessage = (error as ErrorResponse).message;
      showErrorMessage(errorMessage);
    }
  };

  return (
    <>
      <Navbar />
      <Text type="h3" component={'h3'}>
        Settings
      </Text>
      <Text type="h4" component={'h4'} color={colors.blue.step11} customStyle={{ marginBottom: '10px' }}>
        Company Information
      </Text>
      <Paper className={cx(classes.paper)}>
        <Formik
          initialValues={{
            full_name: userDetail.company.full_name,
            address: userDetail.company.address,
            tel_no: userDetail.company.tel_no,
          }}
          validationSchema={changeCompanyInformationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '560px',
                padding: '10px 20px',
                gap: '10px',
              }}
            >
              <InputDefault
                id="full_name"
                name="full_name"
                error={touched.full_name && errors.full_name}
                value={values.full_name}
                label="Company Name"
                direction="row"
                onChange={handleChange}
              />
              <InputDefault
                id="address"
                name="address"
                error={touched.address && errors.address}
                value={values.address}
                label="Address"
                direction="row"
                onChange={handleChange}
              />
              <InputDefault
                id="tel_no"
                name="tel_no"
                error={touched.tel_no && errors.tel_no}
                value={values.tel_no}
                label="Tel No."
                direction="row"
                onChange={handleChange}
              />
              <UpdateValue updateValue={setCompanyInformation} />
            </Form>
          )}
        </Formik>
      </Paper>
      <ButtonDefault
        customButtonStyles={{ width: '152px', marginTop: '10px' }}
        disabled={
          (companyInformation.full_name === userDetail.company.full_name &&
            companyInformation.address === userDetail.company.address &&
            companyInformation.tel_no === userDetail.company.tel_no) ||
          !companyInformation.full_name
        }
        onClick={handleChangeInformation}
        loading={loading}
      >
        Save Change
      </ButtonDefault>
    </>
  );
};

export default ChangeCompanyInformation;
