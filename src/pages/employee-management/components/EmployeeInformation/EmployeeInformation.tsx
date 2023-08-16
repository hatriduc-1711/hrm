import { Stack } from '@mui/material';
import { Formik, Form } from 'formik';

import InputDefault from '~/components/Input/InputDefault';
import SelectApp from '~/components/Select';
import { IEmployeeInformationProps } from '~/interfaces/employee-interfaces';
import { AutoSubmitEmployeeInformation } from '~/utils/auto-submit-utils';
import { employeeInformationSchema } from '~/utils/validation-util';

const EmployeeInformation = ({ initialValues, handleSubmit }: IEmployeeInformationProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={employeeInformationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched, handleChange, values }) => (
        <Form>
          <Stack direction={'row'} gap={'30px'} padding={'0 20px 30px'}>
            <Stack direction={'column'} gap={'10px'} flex={'calc(50% - 30px)'}>
              <InputDefault
                id="name"
                name="name"
                error={touched?.name && errors?.name}
                value={values?.name}
                label="Name"
                direction="row"
                onChange={handleChange}
                required
              />
              <SelectApp
                id="gender"
                name="gender"
                label="Gender"
                value={values?.gender}
                direction="row"
                onChange={handleChange}
                error={touched.gender && errors.gender}
                menu={[
                  { name: 'Male', value: 0 },
                  { name: 'Female', value: 1 },
                ]}
                required
              />
              <InputDefault
                id="mother_name"
                name="mother_name"
                value={values?.mother_name}
                label="Mother Name"
                direction="row"
                onChange={handleChange}
              />
              <InputDefault
                id="dob"
                name="dob"
                type="date"
                error={touched?.dob && errors?.dob}
                value={values?.dob}
                label="Date of birth"
                direction="row"
                onChange={handleChange}
                required
              />
              <InputDefault
                id="pob"
                name="pob"
                value={values?.pob}
                label="Place of birth"
                direction="row"
                onChange={handleChange}
              />
              <InputDefault
                id="nc_id"
                name="nc_id"
                type="number"
                error={touched?.nc_id && errors?.nc_id}
                value={values?.nc_id}
                label="National Card ID"
                direction="row"
                onChange={handleChange}
                required
              />
              <InputDefault
                id="ktp_no"
                name="ktp_no"
                type="number"
                error={touched?.ktp_no && errors?.ktp_no}
                value={values?.ktp_no}
                label="KTP No."
                direction="row"
                onChange={handleChange}
                required
              />
              <InputDefault
                id="home_address_1"
                name="home_address_1"
                value={values?.home_address_1}
                label="Home Address 1"
                direction="row"
                onChange={handleChange}
              />
              <InputDefault
                id="home_address_2"
                name="home_address_2"
                value={values?.home_address_2}
                label="Home Address 2"
                direction="row"
                onChange={handleChange}
              />
            </Stack>
            <Stack direction={'column'} gap={'10px'} flex={'calc(50% - 30px)'}>
              <InputDefault
                id="mobile_no"
                name="mobile_no"
                type="number"
                value={values?.mobile_no}
                label="Mobile No."
                direction="row"
                onChange={handleChange}
              />
              <InputDefault
                id="tel_no"
                name="tel_no"
                type="number"
                value={values?.tel_no}
                label="Tel No."
                direction="row"
                onChange={handleChange}
              />
              <SelectApp
                id="marriage_id"
                name="marriage_id"
                label="Marriage Status"
                value={values?.gender}
                direction="row"
                onChange={handleChange}
                menu={[
                  { name: 'Married with 1 kid', value: 3 },
                  { name: 'Single', value: 2 },
                  { name: 'Married', value: 1 },
                ]}
              />
              <InputDefault
                id="card_number"
                name="card_number"
                type="number"
                value={values?.card_number}
                label="Bank Card No."
                direction="row"
                onChange={handleChange}
              />
              <InputDefault
                id="bank_account_no"
                name="bank_account_no"
                type="number"
                value={values?.bank_account_no}
                label="Bank Account No."
                direction="row"
                onChange={handleChange}
              />
              <InputDefault
                id="bank_name"
                name="bank_name"
                value={values?.bank_name}
                label="Bank Name"
                direction="row"
                onChange={handleChange}
              />
              <InputDefault
                id="family_card_number"
                name="family_card_number"
                type="number"
                value={values?.family_card_number}
                label="Family Card Number"
                direction="row"
                onChange={handleChange}
              />
              <InputDefault
                id="safety_insurance_no"
                name="safety_insurance_no"
                type="number"
                value={values?.safety_insurance_no}
                label="Safety Insurance No."
                direction="row"
                onChange={handleChange}
              />
              <InputDefault
                id="health_insurance_no"
                name="health_insurance_no"
                type="number"
                value={values?.health_insurance_no}
                label="Health Insurance No."
                direction="row"
                onChange={handleChange}
              />
            </Stack>
          </Stack>
          <AutoSubmitEmployeeInformation handleSubmit={handleSubmit} />
        </Form>
      )}
    </Formik>
  );
};

export default EmployeeInformation;
