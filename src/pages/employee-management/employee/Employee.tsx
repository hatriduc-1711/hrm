/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useLayoutEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { useDebounce } from 'usehooks-ts';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Navbar from '~/layouts/components/Navbar';
import Text from '~/components/Text';
import Search from '~/components/Search';
import ButtonAdd from '~/components/Button/ButtonAdd';
import ButtonDelete from '~/components/Button/ButtonDelete';
import Divider from '~/components/Divider';
import Pagination from '~/components/Pagination/Pagination';
import ModalApp from '~/components/Modal';
import Paper from '../components/Paper';
import ErrorResponse from '~/interfaces/error-response-interfaces';
import Table, { CheckboxBody, TableCellBody, TableRowBody } from '~/components/Table';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import { showErrorMessage, showSuccessMessage } from '~/utils/toast-util';
import { employeeTableHead } from '~/utils/table-util';
import { employeeThunkActions } from '~/redux/employee';
import { IEmployeeResponseData } from '~/interfaces/employee-interfaces';
import { EEmployeeThunkActions } from '~/redux/employee/constants';
import ROUTER from '~/variables/router';

const Employee = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');

  const [searchValue, setSearchValue] = useState<string>('');
  const [employee, setEmployee] = useState<IEmployeeResponseData>();
  const [employeeDeleteList, setEmployeeDeleteList] = useState<number[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const isGetEmployee = useAppSelector((state) => state.loading[EEmployeeThunkActions.EMPLOYEE]);
  const isGetEmployeeDetail = useAppSelector((state) => state.loading[EEmployeeThunkActions.GET_EMPLOYEE]);
  const isDeleteEmployee = useAppSelector((state) => state.loading[EEmployeeThunkActions.DELETE_EMPLOYEE]);

  const debounce = useDebounce(searchValue, 1000);
  const lengthEmployeeList = employee === undefined ? 0 : employee.data.length;
  const lengthEmployeeDeleteList = employeeDeleteList.length;

  const getEmployeeList = async () => {
    try {
      const response = await dispatch(
        employeeThunkActions.getEmployeeList({
          search: debounce,
          page: page ? parseInt(page) : 1,
        }),
      );
      const data = response.payload as IEmployeeResponseData;
      setEmployee(data);
    } catch (error) {
      const message = (error as ErrorResponse).message;
      showErrorMessage(message);
    }
  };

  useLayoutEffect(() => {
    void getEmployeeList();
  }, [debounce, page]);

  const handleSelectSingle = (id: number) => {
    const check = !!employeeDeleteList.find((item) => item === id);
    if (!check) {
      setEmployeeDeleteList([...employeeDeleteList, id]);
    } else {
      setEmployeeDeleteList(employeeDeleteList.filter((item) => item !== id));
    }
  };

  const handleSelectAll = () => {
    if (lengthEmployeeList !== lengthEmployeeDeleteList) {
      const employeeAll = employee?.data.map((item) => item.id) as number[];
      setEmployeeDeleteList([...employeeAll]);
    } else {
      setEmployeeDeleteList([]);
    }
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleChangePage = (_: any, page: number) => {
    setSearchParams({ ...Object.fromEntries([...searchParams]), page: page.toString() });
  };

  const handleDelete = async () => {
    try {
      await dispatch(employeeThunkActions.deleteEmployee(employeeDeleteList));
      await getEmployeeList();
      setEmployeeDeleteList([]);
      setShowModal(false);
      showSuccessMessage('Delete successfully');
    } catch (error) {
      const message = (error as ErrorResponse).message;
      showErrorMessage(message);
    }
  };

  const handleDoubleClick = async (id: number) => {
    try {
      await dispatch(employeeThunkActions.getEmployeeDetail(id));
      navigate(`${ROUTER.addAndUpdateEmployee}/${id}`);
    } catch (error) {
      const message = (error as ErrorResponse).message;
      showErrorMessage(message);
    }
  };

  return (
    <>
      <Navbar />
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} paddingBottom={'10px'}>
        <Text type="h3" component={'h3'}>
          Employee Management
        </Text>
        <Search onChange={handleSearch} />
      </Stack>
      <Paper>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'end'} gap={'4px'}>
          <ButtonAdd onClick={() => navigate(ROUTER.addAndUpdateEmployee)}>Add</ButtonAdd>
          <ButtonDelete disabled={lengthEmployeeDeleteList === 0} onClick={() => setShowModal(true)}>
            Delete
          </ButtonDelete>
        </Stack>
        <Divider />
        <Table
          tableHead={employeeTableHead}
          loading={isGetEmployee || isGetEmployeeDetail}
          empty={employee !== undefined && lengthEmployeeList === 0}
          indeterminate={lengthEmployeeDeleteList !== 0 && lengthEmployeeDeleteList !== lengthEmployeeList}
          onClick={handleSelectAll}
        >
          {employee?.data.map((item) => (
            <TableRowBody
              onDoubleClick={() => {
                void handleDoubleClick(item.id);
              }}
              onClick={() => handleSelectSingle(item.id)}
              key={item.id}
              checked={!!employeeDeleteList.find((select) => select === item.id)}
            >
              <CheckboxBody checked={!!employeeDeleteList.find((select) => select === item.id)} />
              <TableCellBody minWidth="90">{item.staff_id}</TableCellBody>
              <TableCellBody minWidth="150">{item.name}</TableCellBody>
              <TableCellBody minWidth="100">{item.gender === 0 ? 'Male' : 'Female'}</TableCellBody>
              <TableCellBody minWidth="130">{item.card_number}</TableCellBody>
              <TableCellBody minWidth="150">{item.bank_account_no}</TableCellBody>
              <TableCellBody minWidth="150">{item.family_card_number}</TableCellBody>
              <TableCellBody minWidth="130">{item.marriage_code}</TableCellBody>
              <TableCellBody minWidth="150">{item.mother_name}</TableCellBody>
              <TableCellBody minWidth="108">{item.dob}</TableCellBody>
              <TableCellBody minWidth="108">{item.pob}</TableCellBody>
              <TableCellBody minWidth="131">{item.home_address_1}</TableCellBody>
              <TableCellBody minWidth="131">{item.home_address_2}</TableCellBody>
              <TableCellBody minWidth="170">{item.nc_id}</TableCellBody>
              <TableCellBody minWidth="90">{item.contract_start_date}</TableCellBody>
              <TableCellBody minWidth="90">First</TableCellBody>
              <TableCellBody minWidth="90">Second</TableCellBody>
              <TableCellBody minWidth="90">End</TableCellBody>
              <TableCellBody minWidth="150">{item.department_name}</TableCellBody>
              <TableCellBody minWidth="120">
                {item.type === '0' ? 'Permanent' : item.type === '1' ? 'Part-time' : 'Contract'}
              </TableCellBody>
              <TableCellBody minWidth="90">{item.basic_salary}</TableCellBody>
              <TableCellBody minWidth="150">{item.position_name}</TableCellBody>
              <TableCellBody minWidth="90">{item.entitle_ot === 0 ? 'no' : 'yes'}</TableCellBody>
              <TableCellBody minWidth="90">{item.entitle_ot === 0 ? 'no' : 'yes'}</TableCellBody>
              <TableCellBody minWidth="90">{item.meal_allowance}</TableCellBody>
              <TableCellBody minWidth="90">{item.grade_name}</TableCellBody>
            </TableRowBody>
          ))}
        </Table>
        <Divider />
        <Pagination
          count={(employee?.links.length as number) - 2}
          from={employee?.from as number}
          to={employee?.to as number}
          total={employee?.total as number}
          onChange={handleChangePage}
        />
      </Paper>
      <ModalApp
        open={showModal}
        loading={isDeleteEmployee}
        title="Delete"
        description="Are you sure you want to delete?"
        onClickButtonYes={handleDelete}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Employee;
