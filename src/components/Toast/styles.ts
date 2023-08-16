import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles<void, 'message'>()((_, __, classes) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '245px',
    maxWidth: '385px',
    padding: '16px',
    borderRadius: '8px',
    transform: 'translateX(120%)',
    transition: 'all 0.2s linear',
    gap: '10px',
  },
  show: {
    transform: 'translateX(0)',
  },
  message: {
    flex: 1,
    fontSize: '13px',
    fontWeight: 600,
    lineHeight: '18px',
    letterSpacing: '-0.01px',
  },
  success: {
    backgroundColor: colors.teal.step4,
    [`& .${classes.message}`]: {
      color: colors.teal.step9,
    },
  },
  warning: {
    backgroundColor: colors.amber.step3,
    [`& .${classes.message}`]: {
      color: colors.amber.step8,
    },
  },
  error: {
    backgroundColor: colors.red.step3,
    [`& .${classes.message}`]: {
      color: colors.red.step9,
    },
  },
  information: {
    backgroundColor: colors.grey.step3,
    [`& .${classes.message}`]: {
      color: colors.grey.step12,
    },
  },
}));

export default useStyles;
