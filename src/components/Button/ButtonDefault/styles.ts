import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  container: {
    minWidth: '142px',
    height: '48px',
  },
  lightDefault: {
    backgroundColor: colors.blue.step3,
    color: colors.blue.step9,
    '&:hover ': {
      backgroundColor: colors.blue.step4,
    },
  },
  darkDefault: {
    minWidth: '90px',
    backgroundColor: colors.blue.step9,
    color: colors.blue.step3,
    '&:hover ': {
      backgroundColor: colors.blue.step10,
    },
  },
}));

export default useStyles;
