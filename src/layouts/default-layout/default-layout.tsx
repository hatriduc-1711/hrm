import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Loading from '~/components/Loading';
import colors from '~/themes/colors';

const DefaultLayout = () => {
  return (
    <Stack direction={'column'} height={'100vh'} sx={{ backgroundColor: colors.grey.step2 }}>
      <Header />
      <Stack direction={'row'} flex={'1 1 0%'}>
        <Sidebar />
        <Stack direction={'column'} sx={{ overflowY: 'auto', flex: 1 }} alignItems={'center'}>
          <Suspense fallback={<Loading />}>
            <Box component={'main'} sx={{ flex: '1 1 0%', width: '100%', padding: '32px 46px 0', margin: 0 }}>
              <Stack direction={'column'} gap={'10px'}>
                <Outlet />
              </Stack>
            </Box>
          </Suspense>
          <Footer />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DefaultLayout;
