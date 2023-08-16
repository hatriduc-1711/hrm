import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  light: {
    minWidth: '90px',
    backgroundColor: colors.violet.step3,
    color: colors.violet.step11,
    '&:hover ': {
      backgroundColor: colors.violet.step4,
    },
  },
  dark: {
    minWidth: '90px',
    backgroundColor: colors.violet.step9,
    color: colors.violet.step3,
    '&:hover ': {
      backgroundColor: colors.violet.step10,
    },
  },
}));

export default useStyles;
