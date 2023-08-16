import { Box, Button } from '@mui/material';
import { FiLoader } from 'react-icons/fi';

import useStyles from './styles';
import { IButtonProps } from '~/interfaces/comp-interfaces';

const ButtonApp = ({
  children,
  disabled,
  loading,
  onClick,
  prefixIcon,
  suffixIcon,
  className,
  customButtonStyles,
}: IButtonProps) => {
  const { classes, cx } = useStyles();
  return (
    <Button
      className={cx(classes.container, className, (disabled || loading) && classes.disabled)}
      onClick={onClick}
      sx={customButtonStyles}
      startIcon={
        loading ? (
          <Box className={cx(classes.loading)}>
            <FiLoader />
          </Box>
        ) : (
          prefixIcon
        )
      }
      endIcon={suffixIcon}
      disabled={loading || disabled}
    >
      {children}
    </Button>
  );
};

export default ButtonApp;
