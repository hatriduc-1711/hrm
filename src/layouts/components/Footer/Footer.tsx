import { Box } from '@mui/material';
import Text from '~/components/Text';
import colors from '~/themes/colors';

const Footer = () => {
  return (
    <Box sx={{ display: 'flex', padding: '32px' }} component={'footer'}>
      <Text component={'span'} type="h8" color={colors.grey.step11} customStyle={{ fontSize: '12px !important' }}>
        Copyright © 2022. All Rights Reserved
      </Text>
    </Box>
  );
};

export default Footer;
