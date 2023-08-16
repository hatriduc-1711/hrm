import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import Text from '~/components/Text';
import colors from '~/themes/colors';
import { INavButtonProps } from '~/interfaces/comp-interfaces';
import { ReceiptItemIcon } from '~/assets/icons';

const PayrollManagementButton = ({ to, active }: INavButtonProps) => {
  const { classes, cx } = useStyles();

  return (
    <Button component={Link} to={to} className={cx(classes.container, active ? classes.active : null)}>
      <Box className={cx(classes.icon)} sx={{ boxShadow: active ? '0px 6px 9px 0px rgba(0, 106, 220, 0.15)' : '' }}>
        <ReceiptItemIcon />
      </Box>
      <Text type="h7" component={'span'} color={colors.grey.step12} customStyle={{ textTransform: 'capitalize' }}>
        Payroll Management
      </Text>
    </Button>
  );
};

export default PayrollManagementButton;
