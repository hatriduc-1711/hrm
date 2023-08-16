/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';
import { Pagination as PaginationMui, PaginationItem, Stack, Box } from '@mui/material';
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { useSearchParam } from 'react-use';

import useStyles from './styles';
import Text from '~/components/Text';
import colors from '~/themes/colors';
import { IPaginationProps } from '~/interfaces/comp-interfaces';

const Pagination = ({ from, to, total, count, onChange }: IPaginationProps) => {
  const { classes, cx } = useStyles();
  const pageParam = useSearchParam('page');
  const pageDefault = useMemo(() => {
    const page = pageParam ? parseInt(pageParam) : 1;
    return page;
  }, []);

  return (
    <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
      <PaginationMui
        defaultPage={pageDefault}
        count={count ? count : 1}
        showFirstButton
        showLastButton
        onChange={onChange}
        renderItem={(item) => (
          <PaginationItem
            components={{
              last: (props) => <MdOutlineKeyboardDoubleArrowRight {...props} />,
              next: (props) => <MdOutlineKeyboardArrowRight {...props} />,
              first: (props) => <MdOutlineKeyboardDoubleArrowLeft {...props} />,
              previous: (props) => <MdOutlineKeyboardArrowLeft {...props} />,
            }}
            className={cx(
              classes.pagination,
              item.type === 'page' ? classes.page : classes.noPage,
              item.selected && classes.active,
            )}
            {...item}
          />
        )}
      />
      {total !== 0 && (
        <Box
          sx={{
            display: 'flex',
            padding: '8px 12px',
            borderRadius: '6px',
            backgroundColor: colors.grey.step3,
          }}
        >
          <Text component={'span'} type="h8" color={colors.grey.step11}>
            {from} - {to} of {total}
          </Text>
        </Box>
      )}
    </Stack>
  );
};

export default Pagination;
