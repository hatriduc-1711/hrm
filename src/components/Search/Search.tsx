import { Box } from '@mui/material';

import useStyles from './styles';
import { SearchIcon } from '~/assets/icons';
import { ISearchProps } from '~/interfaces/comp-interfaces';

const Search = ({ onChange, value }: ISearchProps) => {
  const { classes, cx } = useStyles();

  return (
    <Box className={cx(classes.container)}>
      <Box sx={{ display: 'flex' }}>
        <SearchIcon />
      </Box>
      <input placeholder="Search..." value={value} className={cx(classes.input)} onChange={onChange} />
    </Box>
  );
};

export default Search;
