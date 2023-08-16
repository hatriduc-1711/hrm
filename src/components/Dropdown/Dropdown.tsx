import { useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';

import useStyles from './styles';
import Text from '~/components/Text';
import colors from '~/themes/colors';
import { ChevronDownIcon } from '~/assets/icons';
import { IDropdownProps, IMenuItem } from '~/interfaces/comp-interfaces';

const Dropdown = ({ menu, onClickItem }: IDropdownProps) => {
  const { classes, cx } = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState<IMenuItem>(menu[0]);
  const open = Boolean(anchorEl);

  const handleClick = (item: IMenuItem) => {
    setValue(item);
    if (onClickItem) onClickItem(item.value);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        className={cx(classes.dropdown)}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Box className={cx(classes.menuItem)}>
          {value.icon && value.icon}
          <Text component={'span'} type="h8" color={colors.grey.step12} customStyle={{ fontSize: '12px !important' }}>
            {value.value}
          </Text>
        </Box>
        <ChevronDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        className={cx(classes.menu)}
        id="basic-menu"
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menu.map((item) => (
          <MenuItem key={item.value} onClick={() => handleClick(item)}>
            <Box className={cx(classes.menuItem)}>
              {item.icon && item.icon}
              <Text
                component={'span'}
                type="h8"
                color={colors.grey.step12}
                customStyle={{ fontSize: '12px !important' }}
              >
                {item.value}
              </Text>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Dropdown;
