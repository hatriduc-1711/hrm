import { Box, Stack } from '@mui/material';

import Text from '~/components/Text';
import Dropdown from '~/components/Dropdown';
import AvatarApp from '~/components/Avatar';
import colors from '~/themes/colors';
import { LogoIcon, VnIcon, EnIcon } from '~/assets/icons';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.grey.step1,
        padding: '12px 30px',
        boxShadow: `0px 3px 15px 0px ${colors.grey.step4}`,
      }}
      component={'header'}
    >
      <Stack direction={'row'} alignItems={'center'} gap={'16px'}>
        <LogoIcon width={'36px'} height={'36px'} />
        <Text type="h4" component={'h4'} color={colors.grey.step12}>
          HR Management System
        </Text>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} gap={'20px'}>
        <Dropdown
          menu={[
            { icon: <EnIcon />, value: 'EN' },
            { icon: <VnIcon />, value: 'VN' },
          ]}
        />
        <AvatarApp />
      </Stack>
    </Box>
  );
};

export default Header;
