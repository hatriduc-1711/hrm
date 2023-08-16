import { Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';

import * as NavButton from '~/components/NavButton';
import Text from '~/components/Text';
import Divider from '~/components/Divider';
import colors from '~/themes/colors';
import ROUTER from '~/variables/router';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Stack
      direction={'column'}
      component={'nav'}
      sx={{
        backgroundColor: colors.grey.step1,
        padding: '30px 24px',
        boxShadow: `0px 5px 20px ${colors.grey.step3}`,
        marginTop: '2px',
        overflowY: 'auto',
        gap: '10px',
      }}
    >
      <Text component={'h4'} type="h4" color={colors.blue.step11}>
        General
      </Text>
      <NavButton.AttendanceManagementButton to={ROUTER.home} active={pathname === ROUTER.home} />
      <NavButton.LeaveManagementButton to={ROUTER.home} active={pathname === ROUTER.home} />
      <NavButton.PayrollManagementButton to={ROUTER.home} active={pathname === ROUTER.home} />
      <NavButton.EmployeeManagementButton to={ROUTER.employee} active={pathname.includes(ROUTER.employee)} />
      <NavButton.UserManagementButton to={ROUTER.home} active={pathname === ROUTER.home} />
      <NavButton.MasterManagementButton to={ROUTER.home} active={pathname === ROUTER.home} />
      <Divider />
      <Text component={'h4'} type="h4">
        Advance
      </Text>
      <NavButton.GlobalSettingsButton to={ROUTER.home} active={pathname === ROUTER.home} />
      <NavButton.SettingsButton to={ROUTER.settings} active={pathname.includes(ROUTER.settings)} />
    </Stack>
  );
};

export default Sidebar;
