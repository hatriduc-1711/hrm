import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '200px',
    backgroundColor: colors.grey.step1,
    padding: '10px',
    border: '1px solid',
    borderColor: colors.grey.step6,
    borderRadius: '10px',
    gap: '10px',
    '&:hover': {
      borderColor: colors.grey.step12,
    },
    '&:focus-within': {
      borderColor: colors.blue.step9,
    },
  },
  input: {
    flex: 1,
    fontFamily: 'SVN-SofiaPro',
    fontSize: '14px',
    fontWeight: 400,
    border: 'none',
    outline: 'none',
    color: colors.grey.step11,
    backgroundColor: 'transparent',
  },
}));

export default useStyles;
