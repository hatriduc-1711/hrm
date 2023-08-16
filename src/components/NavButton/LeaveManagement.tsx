import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import Text from '~/components/Text';
import colors from '~/themes/colors';
import { INavButtonProps } from '~/interfaces/comp-interfaces';
import { NoteRemoveIcon } from '~/assets/icons';

const LeaveManagementButton = ({ to, active }: INavButtonProps) => {
  const { classes, cx } = useStyles();

  return (
    <Button component={Link} to={to} className={cx(classes.container, active ? classes.active : null)}>
      <Box className={cx(classes.icon)} sx={{ boxShadow: active ? '0px 6px 9px 0px rgba(255, 160, 28, 0.15)' : '' }}>
        <NoteRemoveIcon />
      </Box>
      <Text type="h7" component={'span'} color={colors.grey.step12} customStyle={{ textTransform: 'capitalize' }}>
        Leave Management
      </Text>
    </Button>
  );
};

export default LeaveManagementButton;
