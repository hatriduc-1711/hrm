import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  container: {
    minWidth: '180px',
    height: '42px',
  },
  lightDefault: {
    backgroundColor: colors.blue.step4,
    color: colors.blue.step9,
    '&:hover ': {
      backgroundColor: colors.blue.step5,
    },
  },
  darkDefault: {
    backgroundColor: colors.blue.step9,
    color: colors.blue.step3,
    '&:hover ': {
      backgroundColor: colors.blue.step10,
    },
  },
  lightError: {
    backgroundColor: colors.red.step3,
    color: colors.red.step9,
    '&:hover ': {
      backgroundColor: colors.red.step4,
    },
  },
  darkError: {
    backgroundColor: colors.red.step9,
    color: colors.red.step3,
    '&:hover ': {
      backgroundColor: colors.red.step10,
    },
  },
}));

export default useStyles;
