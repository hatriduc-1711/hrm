import { makeStyles } from 'tss-react/mui';
import colors from '~/themes/colors';

const useStyles = makeStyles<void, 'cellBody'>()((_, __, classes) => ({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '525px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      backgroundColor: '#00000000',
      width: '12px',
      height: '12px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: colors.grey.step3,
      borderRadius: '32px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: colors.grey.step7,
      borderRadius: '32px',
      border: `2px solid ${colors.grey.step3}`,
    },
  },
  row: {
    display: 'flex',
  },
  rowBody: {
    cursor: 'pointer',
    '&:hover': {
      [`& .${classes.cellBody}`]: {
        backgroundColor: colors.blue.step3,
      },
    },
  },
  rowBodyChecked: {
    [`& .${classes.cellBody}`]: {
      backgroundColor: colors.green.step3,
    },
  },
  cell: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '31px',
    padding: '3px 10px',
    border: '1px solid',
    borderColor: '#fff',
  },
  cellHead: {
    backgroundColor: colors.grey.step4,
  },
  cellBody: {
    backgroundColor: colors.grey.step2,
  },
  cellCheckbox: {
    width: '36px',
    padding: '0 3px',
    justifyContent: 'center',
  },
  checkbox: {
    padding: '4px',
    '&.Mui-checked': {
      color: colors.green.step9,
    },
    '&.MuiCheckbox-indeterminate': {
      color: colors.green.step9,
    },
  },
  loadingOrEmpty: {
    position: 'sticky',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    inset: 0,
    flex: '1 1 0%',
    backgroundColor: 'transparent',
  },
}));

export default useStyles;
