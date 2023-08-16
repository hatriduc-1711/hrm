import { Box, Typography } from '@mui/material';
import useStyles from './styles';

import { IToastProps } from '~/interfaces/comp-interfaces';
import { CloseIcon } from '~/assets/icons';

const Toast = ({ message, icon, type, onClick, visible }: IToastProps) => {
  const { classes, cx } = useStyles();
  return (
    <Box className={cx(classes.container, classes[type], visible && classes.show)}>
      {!!icon && icon}
      <Typography className={cx(classes.message)}>{message}</Typography>
      <Box onClick={onClick} sx={{ display: 'flex', cursor: 'pointer' }}>
        <CloseIcon />
      </Box>
    </Box>
  );
};

export default Toast;
