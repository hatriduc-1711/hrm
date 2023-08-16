import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  pagination: {
    height: '35px',
    width: '48px',
    padding: '8px 12px',
    borderRadius: '6px',
    '& .MuiPaginationItem-icon': {
      fontSize: '16px',
    },
  },
  page: {
    backgroundColor: colors.grey.step3,
    color: colors.grey.step11,
  },
  noPage: {
    backgroundColor: '#fff',
  },
  active: {
    color: colors.grey.step12,
  },
}));

export default useStyles;
