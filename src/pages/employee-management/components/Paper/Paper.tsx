import { Paper as PaperMUI } from '@mui/material';

import useStyles from './styles';

const Paper = ({ children }: { children: React.ReactNode }) => {
  const { classes, cx } = useStyles();
  return <PaperMUI className={cx(classes.paper)}>{children}</PaperMUI>;
};

export default Paper;
