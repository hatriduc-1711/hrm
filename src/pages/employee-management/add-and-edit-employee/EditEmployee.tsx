import { useState } from 'react';
import { Stack } from '@mui/material';

import Text from '~/components/Text';
import ButtonDefault from '~/components/Button/ButtonDefault';
import ButtonTab from '~/components/Button/ButtonTab';
import Navbar from '~/layouts/components/Navbar';
import Paper from '../components/Paper';
import Divider from '~/components/Divider';
import colors from '~/themes/colors';

const EditEmployee = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <>
      <Navbar />
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} paddingBottom={'10px'}>
        <Text type="h3" component={'h3'}>
          Employee Management
        </Text>
        <ButtonDefault disabled>Add</ButtonDefault>
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
      </Paper>
    </>
  );
};

export default EditEmployee;
