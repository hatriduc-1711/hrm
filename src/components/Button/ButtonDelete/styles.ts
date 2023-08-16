import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  light: {
    minWidth: '90px',
    backgroundColor: colors.red.step3,
    color: colors.red.step9,
    '&:hover ': {
      backgroundColor: colors.red.step4,
    },
  },
  dark: {
    minWidth: '90px',
    backgroundColor: colors.red.step9,
    color: colors.red.step3,
    '&:hover ': {
      backgroundColor: colors.red.step10,
    },
  },
}));

export default useStyles;
