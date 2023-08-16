import { SelectChangeEvent } from '@mui/material/Select';
import { CSSProperties } from '@mui/styles';
import React, { ChangeEvent } from 'react';
import { CxArg } from 'tss-react';

export interface ITextProps {
  children: React.ReactNode;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8';
  component?: React.ElementType;
  color?: string;
  customStyle?: CSSProperties;
}

export interface IButtonProps {
  children: React.ReactNode;
  className?: CxArg;
  prefixIcon?: React.ReactElement;
  suffixIcon?: React.ReactElement;
  loading?: boolean;
  disabled?: boolean;
  customButtonStyles?: CSSProperties;
  onClick?: () => Promise<void> | void;
}

export interface IButtonSmallProps extends IButtonProps {
  type?: 'light' | 'dark';
}

export interface IButtonTabProps extends IButtonProps {
  type?: 'lightDefault' | 'darkDefault' | 'lightError' | 'darkError';
}

export interface IButtonDefaultProps extends IButtonProps {
  type?: 'lightDefault' | 'darkDefault';
}

export interface IInputProps {
  id: string;
  name: string;
  label?: string;
  value?: string | number | null;
  direction?: 'row' | 'column';
  type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'date';
  prefixIcon?: React.ReactElement;
  suffixIcon?: React.ReactElement;
  onChange?: (e: ChangeEvent) => void;
  error?: string | boolean;
  required?: boolean;
}

interface IMenu {
  name: string;
  value: string | number;
}

export interface ISelectProps {
  id: string;
  name: string;
  label?: string;
  direction?: 'row' | 'column';
  onChange?: (event: SelectChangeEvent) => void;
  value: string | number;
  menu: IMenu[];
  error?: string | boolean;
  required?: boolean;
}

export interface ISearchProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IMenuItem {
  icon?: React.ReactElement;
  value: string;
}

export interface IDropdownProps {
  menu: IMenuItem[];
  onClickItem?: (value: string) => void;
}

export interface ICheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface INavButtonProps {
  to: string;
  active: boolean;
}

export interface IModalProps {
  open: boolean;
  loading: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  onClickButtonYes: () => Promise<void> | void;
}

export interface IToastProps {
  type: 'success' | 'warning' | 'error' | 'information';
  message: string;
  visible?: boolean;
  icon: React.ReactElement;
  onClick: () => void;
}

export interface ITableHeadItem {
  name: string;
  minWidth: number;
}

export interface ITableCellBodyProps {
  children: string | number | null;
  minWidth: string;
}

export interface ITableRowBodyProps {
  children: React.ReactNode;
  checked?: boolean;
  onClick: () => void;
  onDoubleClick: () => void;
}

export interface ICheckboxBodyProps {
  checked?: boolean;
}

export interface ITableProps {
  tableHead: ITableHeadItem[];
  children?: React.ReactNode;
  loading?: boolean;
  empty?: boolean;
  indeterminate?: boolean;
  onClick?: () => void;
}

export interface IPaginationProps {
  from: number;
  to: number;
  total: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
