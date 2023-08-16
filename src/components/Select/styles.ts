import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  error: {
    backgroundColor: colors.red.step3,
    border: `1px solid ${colors.red.step7}`,
  },
}));

export default useStyles;
