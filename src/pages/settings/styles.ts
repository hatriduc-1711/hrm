import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.grey.step1,
    padding: '10px',
    borderRadius: '12px',
    boxShadow: `0px 5px 20px ${colors.grey.step3}`,
    gap: '10px',
  },
}));

export default useStyles;
