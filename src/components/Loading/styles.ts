import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  container: {
    position: 'sticky',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 1 0%',
    width: '100%',
  },
}));

export default useStyles;
