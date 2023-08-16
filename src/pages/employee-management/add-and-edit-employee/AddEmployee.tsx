import { useState } from 'react';
import { Stack, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Text from '~/components/Text';
import ButtonDefault from '~/components/Button/ButtonDefault';
import ButtonTab from '~/components/Button/ButtonTab';
import Navbar from '~/layouts/components/Navbar';
import Divider from '~/components/Divider';
import colors from '~/themes/colors';
import ErrorResponse from '~/interfaces/error-response-interfaces';

import Paper from '../components/Paper';
import EmployeeInformation from '../components/EmployeeInformation';
import { initialValuesEmployeeInformation } from '~/utils/employee-util';
import { TInitialValuesEmployeeInformation } from '~/interfaces/employee-interfaces';
import { showErrorMessage, showSuccessMessage } from '~/utils/toast-util';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import { employeeThunkActions } from '~/redux/employee';
import ROUTER from '~/variables/router';
import { EEmployeeThunkActions } from '~/redux/employee/constants';

const AddEmployee = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [tab, setTab] = useState<number>(1);

  const isLoading = useAppSelector((state) => state.loading[EEmployeeThunkActions.CREATE_EMPLOYEE]);

  const [employeeInformation, setEmployeeInformation] = useState<{
    validation: boolean;
    value: TInitialValuesEmployeeInformation;
  }>({ validation: true, value: initialValuesEmployeeInformation });

  const handleSubmitEmployeeInformation = (value: TInitialValuesEmployeeInformation, validation: boolean) => {
    setEmployeeInformation({ ...employeeInformation, value: value, validation: validation });
  };

  const handleAddEmployee = async () => {
    try {
      await dispatch(employeeThunkActions.createEmployee(employeeInformation));
      navigate(ROUTER.employee);
      showSuccessMessage('Successfully added employee!');
    } catch (error) {
      const errorMessage = (error as ErrorResponse).message;
      showErrorMessage(errorMessage);
    }
  };

  return (
    <>
      <Navbar />
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} paddingBottom={'10px'}>
        <Text type="h3" component={'h3'}>
          Employee Management
        </Text>
        <ButtonDefault disabled={employeeInformation.validation || isLoading} onClick={handleAddEmployee}>
          Add
        </ButtonDefault>
      </Stack>
      <Stack direction={'row'} gap={'4px'} paddingBottom={'10px'} flexWrap={'wrap'}>
        <ButtonTab type={tab === 1 ? 'darkDefault' : 'lightDefault'} onClick={() => setTab(1)}>
          Employee Information
        </ButtonTab>
        <ButtonTab type={tab === 2 ? 'darkDefault' : 'lightDefault'} onClick={() => setTab(2)}>
          Contract Information
        </ButtonTab>
        <ButtonTab type={tab === 3 ? 'darkDefault' : 'lightDefault'} onClick={() => setTab(3)}>
          Employment Details
        </ButtonTab>
        <ButtonTab type={tab === 4 ? 'darkDefault' : 'lightDefault'} onClick={() => setTab(4)}>
          Salary & Wages
        </ButtonTab>
        <ButtonTab type={tab === 5 ? 'darkDefault' : 'lightDefault'} onClick={() => setTab(5)}>
          Others
        </ButtonTab>
      </Stack>
      <Paper>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Text type="h5" component={'h5'}>
            {tab === 1 && 'Personal Information'}
            {tab === 2 && 'Contract Information'}
            {tab === 3 && 'Employment Details'}
            {tab === 4 && 'Salary & Wages'}
            {tab === 5 && 'Others'}
          </Text>
          <Text type="h8" component={'p'} color={colors.grey.step11}>
            Required (<span style={{ color: colors.red.step9 }}>*</span>)
          </Text>
        </Stack>
        <Divider />
        <Box sx={{ display: tab === 1 ? 'block' : 'none' }}>
          <EmployeeInformation
            initialValues={initialValuesEmployeeInformation}
            handleSubmit={handleSubmitEmployeeInformation}
          />
        </Box>
      </Paper>
    </>
  );
};

export default AddEmployee;
