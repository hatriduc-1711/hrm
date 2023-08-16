import { Box } from '@mui/material';
import colors from '~/themes/colors';

const WrapForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '348px',
        backgroundColor: colors.grey.step1,
        padding: '24px 24px 32px 24px',
        borderRadius: '12px',
        boxShadow: '0px 10px 25px 0px rgba(215, 219, 223, 0.50)',
        gap: '10px',
      }}
      component={'form'}
    >
      {children}
    </Box>
  );
};

export default WrapForm;
