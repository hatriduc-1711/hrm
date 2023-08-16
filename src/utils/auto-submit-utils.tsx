import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import { IUpdateValues } from '~/interfaces/auto-submit-interfaces';
import { ICompanyInformationBody } from '~/interfaces/company-interfaces';
import { IEmployeeInformationProps, TInitialValuesEmployeeInformation } from '~/interfaces/employee-interfaces';

export const UpdateValue = ({ updateValue }: IUpdateValues) => {
  const { values } = useFormikContext();

  useEffect(() => {
    const valuesUpdate = values as ICompanyInformationBody;
    updateValue(valuesUpdate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return null;
};

export const AutoSubmitEmployeeInformation = ({ handleSubmit }: Pick<IEmployeeInformationProps, 'handleSubmit'>) => {
  const { values, errors } = useFormikContext();

  useEffect(() => {
    const employeeInformation = values as TInitialValuesEmployeeInformation;
    const errorsTabInformation = errors as TInitialValuesEmployeeInformation;
    if (
      employeeInformation.name &&
      employeeInformation.dob &&
      employeeInformation.nc_id &&
      employeeInformation.ktp_no &&
      `${employeeInformation.gender}`
    ) {
      handleSubmit(employeeInformation, false);
    }
    if (
      errorsTabInformation?.name ||
      errorsTabInformation?.dob ||
      errorsTabInformation?.nc_id ||
      errorsTabInformation?.ktp_no ||
      errorsTabInformation?.gender
    ) {
      handleSubmit(employeeInformation, true);
    }
  }, [values, handleSubmit, errors]);
  return null;
};
