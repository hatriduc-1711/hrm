import { Typography } from '@mui/material';

import useStyles from './styles';
import { ITextProps } from '~/interfaces/comp-interfaces';

const Text = ({ children, type, color, customStyle, component = 'span' }: ITextProps) => {
  const { classes, cx } = useStyles();
  return (
    <Typography className={cx(classes.container, classes[type])} sx={{ color, ...customStyle }} component={component}>
      {children}
    </Typography>
  );
};

export default Text;
