import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    width: '355px',
    backgroundColor: colors.grey.step1,
    padding: '20px 24px 30px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: colors.grey.step6,
    outline: 'none',
    gap: '4px',
  },
  button: {
    width: '148px',
  },
  buttonNo: {
    backgroundColor: colors.grey.step3,
    color: colors.grey.step12,
    '&:hover': {
      backgroundColor: colors.grey.step4,
    },
  },
}));

export default useStyles;
