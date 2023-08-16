import { Box, CircularProgress } from '@mui/material';
import { CSSProperties } from '@mui/styles';

import useStyles from './styles';

const Loading = ({ styles }: { styles?: CSSProperties }) => {
  const { classes, cx } = useStyles();
  return (
    <Box className={cx(classes.container)} sx={styles}>
      <CircularProgress size={'32px'} />
    </Box>
  );
};

export default Loading;
