import { MenuItem, Select, Stack } from '@mui/material';

import useStyles from './styles';
import Text from '~/components/Text';
import colors from '~/themes/colors';
import { ChevronDownIcon } from '~/assets/icons';
import { ISelectProps } from '~/interfaces/comp-interfaces';

const SelectApp = ({ error, name, id, onChange, label, menu, value, direction = 'column', required }: ISelectProps) => {
  const { classes, cx } = useStyles();
  return (
    <Stack
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
        <Select
          id={id}
          name={name}
          IconComponent={ChevronDownIcon}
          className={cx(!!error && classes.error)}
          onChange={onChange}
          value={value?.toString()}
          sx={{
            height: '48px',
            backgroundColor: colors.grey.step3,
            borderRadius: '6px',
            border: `1px solid ${colors.grey.step3}`,
            '.MuiOutlinedInput-notchedOutline': { border: 0 },
            '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              border: 0,
            },
            '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 0,
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: colors.grey.step1,
                padding: '0 10px',
                border: '1px solid',
                borderColor: colors.grey.step6,
                borderRadius: '8px',
                boxShadow: `0px 5px 15px 0px ${colors.grey.step4}`,
                marginTop: '2px',
                '& li': {
                  fontSize: '16px',
                  lineHeight: '1.5',
                  fontWeight: 400,
                  color: colors.grey.step12,
                  height: '40px',
                  padding: '10px 16px',
                  borderRadius: '6px',
                  backgroundColor: `${colors.grey.step1} !important`,
                  transition: 'all 0.1s linear',
                  '&:hover': {
                    color: colors.green.step9,
                    backgroundColor: `${colors.green.step3} !important`,
                  },
                },
              },
            },
          }}
        >
          {menu.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        {!!error && (
          <Text type="h8" component={'span'} color={colors.red.step9}>
            {error}
          </Text>
        )}
      </Stack>
    </Stack>
  );
};

export default SelectApp;
