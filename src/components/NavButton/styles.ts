import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles<void, 'icon'>()((_, __, classes) => ({
  container: {
    justifyContent: 'start',
    width: '281px',
    padding: '8px 10px',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    transition: 'all 0.1s linear',
    gap: '10px',
    '&:hover ': {
      backgroundColor: colors.grey.step1,
    },
  },
  active: {
    backgroundColor: colors.grey.step3,
    '&:hover ': {
      backgroundColor: colors.grey.step4,
    },
    [`& .${classes.icon}`]: {
      backgroundColor: colors.grey.step1,
    },
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '100%',
    backgroundColor: colors.grey.step3,
  },
}));

export default useStyles;
