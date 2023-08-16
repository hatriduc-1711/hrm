import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles()(() => ({
  dropdown: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '110px',
    backgroundColor: colors.grey.step3,
    padding: '8px 12px',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: colors.grey.step4,
    },
  },
  menu: {
    '& .MuiMenu-paper': {
      width: '110px',
      borderRadius: '8px',
      border: '1px solid',
      borderColor: colors.grey.step6,
      boxShadow: `0px 5px 15px ${colors.grey.step4}`,
      marginTop: '4px',
      '& .MuiMenu-list': {
        padding: 0,
        '& li': {
          padding: '8px 12px ',
        },
      },
    },
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
}));

export default useStyles;
