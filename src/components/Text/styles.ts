import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  container: {
    fontStyle: 'normal',
  },
  h1: {
    fontSize: 64,
    fontWeight: 400,
    lineHeight: '112.5%',
    letterSpacing: '-1.28px',
  },
  h2: {
    fontSize: 48,
    fontWeight: 500,
    lineHeight: '119.7%',
  },
  h3: {
    fontSize: 36,
    fontWeight: 500,
    lineHeight: '119.7%',
    letterSpacing: '-1.08px',
  },
  h4: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.72px',
  },
  h5: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 'normal',
  },
  h6: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 'normal',
  },
  h7: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '150%',
    letterSpacing: '-0.16px',
  },
  h8: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 'normal',
  },
}));

export default useStyles;
