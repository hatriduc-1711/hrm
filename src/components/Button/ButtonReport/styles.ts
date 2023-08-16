import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  light: {
    minWidth: '90px',
    backgroundColor: colors.mint.step3,
    color: colors.mint.step9,
    '&:hover ': {
      backgroundColor: colors.mint.step4,
    },
  },
  dark: {
    minWidth: '90px',
    backgroundColor: colors.mint.step9,
    color: colors.mint.step3,
    '&:hover ': {
      backgroundColor: colors.mint.step10,
    },
  },
}));

export default useStyles;
