import { Box, Stack } from '@mui/material';
import { Link, useLocation, useParams } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

import Text from '~/components/Text';
import colors from '~/themes/colors';
import ROUTER from '~/variables/router';

const Navbar = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  return (
    <Stack
      component={'nav'}
      direction={'row'}
      alignItems={'center'}
      gap={'6px'}
      sx={{
        '& a': { color: colors.grey.step11, textDecoration: 'none' },
        '& div': {
          display: 'flex',
          alignItems: 'center',
          color: colors.grey.step11,
          fontSize: '13px',
        },
      }}
    >
      <Link to={ROUTER.home}>
        <Text component={'span'} type="h8">
          General
        </Text>
      </Link>
      <Box component={'div'}>
        <IoIosArrowForward />
      </Box>
      {(pathname === ROUTER.changeCompanyInformation || pathname === ROUTER.resetPasswordSetting) && (
        <>
          <Link to={ROUTER.settings}>
            <Text component={'span'} type="h8">
              Settings
            </Text>
          </Link>
          <Box component={'div'}>
            <IoIosArrowForward />
          </Box>
        </>
      )}
      {(pathname === ROUTER.addAndUpdateEmployee || id) && (
        <>
          <Link to={ROUTER.employee}>
            <Text component={'span'} type="h8">
              Employee Management
            </Text>
          </Link>
          <Box component={'div'}>
            <IoIosArrowForward />
          </Box>
        </>
      )}
      <Text component={'p'} type="h8">
        {pathname === ROUTER.employee && 'Employee Management'}
        {pathname === ROUTER.addAndUpdateEmployee && 'Add new employee'}
        {id && 'Edit employee'}
        {pathname === ROUTER.settings && 'Settings'}
        {pathname === ROUTER.resetPasswordSetting && 'Change Password'}
        {pathname === ROUTER.changeCompanyInformation && 'Change Company Information'}
      </Text>
    </Stack>
  );
};

export default Navbar;
