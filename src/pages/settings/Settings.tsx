import { Box, Stack, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useStyles from './styles';
import Navbar from '~/layouts/components/Navbar';
import Text from '~/components/Text';
import Divider from '~/components/Divider';
import ButtonEdit from '~/components/Button/ButtonEdit';
import colors from '~/themes/colors';
import ROUTER from '~/variables/router';
import { useAppSelector } from '~/redux/store';
import { userDetailsSelector } from '~/redux/selectors';

const Settings = () => {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const userDetail = useAppSelector(userDetailsSelector);

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
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <ButtonEdit onClick={() => navigate(ROUTER.changeCompanyInformation)}>Edit</ButtonEdit>
        </Box>
        <Divider />
        <Stack direction={'column'} gap={'32px'} padding={'10px 20px'}>
          <Stack direction={'row'} gap={'30px'} alignItems={'start'}>
            <Text component={'p'} type="h7" customStyle={{ minWidth: '136px' }}>
              Company Name:
            </Text>
            <Text component={'p'} type="h7">
              {userDetail.company.full_name}
            </Text>
          </Stack>
          <Stack direction={'row'} gap={'30px'} alignItems={'start'}>
            <Text component={'p'} type="h7" customStyle={{ minWidth: '136px' }}>
              Address:
            </Text>
            <Text component={'p'} type="h7">
              {userDetail.company.address}
            </Text>
          </Stack>
          <Stack direction={'row'} gap={'30px'} alignItems={'start'}>
            <Text component={'p'} type="h7" customStyle={{ minWidth: '136px' }}>
              Tel No. :
            </Text>
            <Text component={'p'} type="h7">
              {userDetail.company.tel_no}
            </Text>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default Settings;
