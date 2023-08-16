import { useState } from 'react';
import { Box } from '@mui/material';

import { ICheckboxProps } from '~/interfaces/comp-interfaces';
import {
  CheckboxEmptyIcon,
  CheckboxCheckedIcon,
  CheckboxCheckedDisabledIcon,
  CheckboxEmptyDisabledIcon,
} from '~/assets/icons';

const CheckboxSquare = ({ checked = false, disabled = false, onClick }: ICheckboxProps) => {
  const [check, setCheck] = useState<boolean>(checked);
  const handleClick = () => {
    if (!disabled) {
      if (onClick) onClick();
      setCheck(!check);
    }
  };

  return (
    <Box onClick={handleClick} sx={{ display: 'flex', cursor: disabled ? 'default' : 'pointer' }}>
      {disabled ? (
        check ? (
          <CheckboxCheckedDisabledIcon />
        ) : (
          <CheckboxEmptyDisabledIcon />
        )
      ) : check ? (
        <CheckboxCheckedIcon />
      ) : (
        <CheckboxEmptyIcon />
      )}
    </Box>
  );
};

export default CheckboxSquare;
