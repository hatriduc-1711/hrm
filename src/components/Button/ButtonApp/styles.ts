import { makeStyles } from 'tss-react/mui';
import { keyframes } from 'tss-react';
import colors from '~/themes/colors';

const rotation = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

const useStyles = makeStyles()(() => ({
  container: {
    padding: '8px 12px',
    borderRadius: '6px',
    textTransform: 'capitalize',
  },
  loading: {
    display: 'flex',
    color: colors.grey.step8,
    animation: `${rotation} 1.2s linear infinite`,
  },
  disabled: {
    backgroundColor: colors.grey.step3,
    color: `${colors.grey.step8} !important`,
  },
}));

export default useStyles;
