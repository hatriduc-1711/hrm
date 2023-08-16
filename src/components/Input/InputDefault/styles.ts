import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  container: {},
  wrapInput: {
    height: '48px',
    backgroundColor: colors.grey.step3,
    padding: ' 8px 12px',
    borderRadius: '6px',
    border: `1px solid ${colors.grey.step3}`,
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'SVN-SofiaPro',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '150%',
    letterSpacing: '-0.16px',
  },
  error: {
    backgroundColor: colors.red.step3,
    border: `1px solid ${colors.red.step7}`,
  },
  icon: {
    display: 'flex',
    cursor: 'pointer',
  },
}));

export default useStyles;
