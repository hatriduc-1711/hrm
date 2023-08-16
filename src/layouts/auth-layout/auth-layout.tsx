import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Stack, Container } from '@mui/material';
import Cookies from 'js-cookie';

import Text from '~/components/Text/Text';
import Footer from '~/layouts/components/Footer';
import { LogoIcon } from '~/assets/icons';
import ROUTER from '~/variables/router';

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get('token')) navigate(ROUTER.home);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Stack direction={'column'} alignItems={'center'} minHeight={'100vh'}>
        <Stack direction={'column'} alignItems={'center'} spacing={'6px'} sx={{ margin: '64px 0 12px' }}>
          <LogoIcon width={'100px'} height={'100px'} />
          <Text type="h3" component={'h3'}>
            HR Management System
          </Text>
        </Stack>
        <Container sx={{ display: 'flex', flex: '1 1 0%', padding: '0 24px', width: '100%' }} component={'main'}>
          <Outlet />
        </Container>
        <Footer />
      </Stack>
    </>
  );
};

export default AuthLayout;
