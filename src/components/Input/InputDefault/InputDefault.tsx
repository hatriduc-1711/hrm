import { useState } from 'react';
import { Box, Stack } from '@mui/material';

import useStyles from './styles';
import Text from '~/components/Text';
import colors from '~/themes/colors';
import { CloseCircleIcon, EyeNoneIcon, EyeOpenIcon } from '~/assets/icons';
import { IInputProps } from '~/interfaces/comp-interfaces';

const InputDefault = ({
  error,
  value,
  type = 'text',
  name,
  id,
  prefixIcon,
  onChange,
  label,
  direction = 'column',
  required = false,
}: IInputProps) => {
  const { classes, cx } = useStyles();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Stack
      className={cx(classes.container)}
      direction={direction}
      gap={direction === 'row' ? '10px' : '8px'}
      alignItems={direction === 'row' ? 'center' : 'start'}
    >
      {label && (
        <Text type="h7" component={'span'} color={colors.grey.step12} customStyle={{ minWidth: '160px' }}>
          {label}
          {required && <span style={{ color: colors.red.step9 }}>*</span>} :
        </Text>
      )}
      <Stack direction={'column'} spacing={'4px'} width={'100%'}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          spacing={'10px'}
          className={cx(classes.wrapInput, !!error && classes.error)}
        >
          {!!prefixIcon && prefixIcon}
          <input
            name={name}
            id={id}
            type={showPassword ? 'text' : type}
            className={cx(classes.input)}
            onChange={onChange}
            value={value}
          />
          {type === 'password' &&
            !!value &&
            (showPassword ? (
              <Box className={cx(classes.icon)} onClick={() => setShowPassword(!showPassword)}>
                <EyeNoneIcon />
              </Box>
            ) : (
              <Box className={cx(classes.icon)} onClick={() => setShowPassword(!showPassword)}>
                <EyeOpenIcon />
              </Box>
            ))}

          {!!error && (
            <Box className={cx(classes.icon)}>
              <CloseCircleIcon />
            </Box>
          )}
        </Stack>
        {!!error && (
          <Text type="h8" component={'span'} color={colors.red.step9}>
            {error}
          </Text>
        )}
      </Stack>
    </Stack>
  );
};

export default InputDefault;
