import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  light: {
    minWidth: '90px',
    backgroundColor: colors.yellow.step4,
    color: colors.yellow.step11,
    '&:hover ': {
      backgroundColor: colors.yellow.step5,
    },
  },
  dark: {
    minWidth: '90px',
    backgroundColor: colors.yellow.step8,
    color: colors.yellow.step4,
    '&:hover ': {
      backgroundColor: colors.yellow.step10,
    },
  },
}));

export default useStyles;
