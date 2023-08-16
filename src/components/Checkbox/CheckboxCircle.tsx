import { useState } from 'react';
import { Box } from '@mui/material';

import { CheckboxCircleEmptyIcon, CheckboxCircleCheckedIcon } from '~/assets/icons';
import { ICheckboxProps } from '~/interfaces/comp-interfaces';

const CheckboxCircle = ({ checked = false, onClick }: Omit<ICheckboxProps, 'disabled'>) => {
  const [check, setCheck] = useState<boolean>(checked);
  const handleClick = () => {
    if (onClick) onClick();
    setCheck(!check);
  };

  return (
    <Box onClick={handleClick} sx={{ display: 'flex', cursor: 'pointer' }}>
      {check ? <CheckboxCircleCheckedIcon /> : <CheckboxCircleEmptyIcon />}
    </Box>
  );
};

export default CheckboxCircle;
