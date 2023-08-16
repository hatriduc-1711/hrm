import {
  Table as TableMUI,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Box,
} from '@mui/material';

import useStyles from './styles';
import Text from '~/components/Text';
import Loading from '~/components/Loading';
import colors from '~/themes/colors';
import { FolderEmptyIcon } from '~/assets/icons';
import { ICheckboxBodyProps, ITableCellBodyProps, ITableProps, ITableRowBodyProps } from '~/interfaces/comp-interfaces';

export const TableRowBody = ({ children, onClick, onDoubleClick, checked }: ITableRowBodyProps) => {
  const { classes, cx } = useStyles();
  return (
    <TableRow
      className={cx(classes.row, classes.rowBody, checked && classes.rowBodyChecked)}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {children}
    </TableRow>
  );
};

export const TableCellBody = ({ children, minWidth }: ITableCellBodyProps) => {
  const { classes, cx } = useStyles();
  return (
    <TableCell className={cx(classes.cell, classes.cellBody)} sx={{ width: `${minWidth}px` }}>
      <Text component={'span'} type="h8" color={colors.grey.step11} customStyle={{ fontSize: '12px !important' }}>
        {children}
      </Text>
    </TableCell>
  );
};

export const CheckboxBody = ({ checked }: ICheckboxBodyProps) => {
  const { classes, cx } = useStyles();
  return (
    <TableCell className={cx(classes.cell, classes.cellBody, classes.cellCheckbox)}>
      <Checkbox className={cx(classes.checkbox)} size="small" checked={checked} />
    </TableCell>
  );
};

const Table = ({ tableHead, children, onClick, loading, empty, indeterminate }: ITableProps) => {
  const { classes, cx } = useStyles();
  return (
    <TableContainer className={cx(classes.container)}>
      <TableMUI>
        <TableHead sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
          <TableRow className={cx(classes.row)}>
            <TableCell
              className={cx(classes.cell, classes.cellHead, classes.cellCheckbox)}
              sx={{ borderTopLeftRadius: '8px' }}
              onClick={onClick}
            >
              <Checkbox className={cx(classes.checkbox)} size="small" indeterminate={indeterminate} />
            </TableCell>
            {tableHead.map((tableHeadItem) => (
              <TableCell
                key={tableHeadItem.name}
                className={cx(classes.cell, classes.cellHead)}
                sx={{ width: `${tableHeadItem.minWidth}px` }}
              >
                <Text component={'span'} type="h8">
                  {tableHeadItem.name}
                </Text>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{!loading && !empty && children}</TableBody>
      </TableMUI>
      {loading ? (
        <Box className={cx(classes.loadingOrEmpty)}>
          <Loading />
        </Box>
      ) : (
        empty && (
          <Box className={cx(classes.loadingOrEmpty)}>
            <FolderEmptyIcon />
            <Text component={'h6'} type="h6" customStyle={{ marginTop: '30px' }}>
              No Data
            </Text>
            <Text component={'p'} type="h7" customStyle={{ marginTop: '5px' }}>
              Your record will be synced here once it ready
            </Text>
          </Box>
        )
      )}
    </TableContainer>
  );
};

export default Table;
