import { Box } from '@mui/material';

import useStyles from './styles';

const DatePicker = () => {
    const { classes, cx } = useStyles();

    return <Box className={cx(classes.container)}></Box>;
};

export default DatePicker;
