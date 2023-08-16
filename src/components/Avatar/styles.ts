import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  popover: {
    '& .MuiPopover-paper': {
      width: '322px',
      padding: '20px 24px',
      border: '1px solid',
      borderColor: colors.grey.step6,
      borderRadius: '8px',
      boxShadow: `0px 5px 15px ${colors.grey.step4}`,
      marginTop: '6px',
    },
  },
}));

export default useStyles;
