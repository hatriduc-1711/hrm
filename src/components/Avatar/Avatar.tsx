import { useState, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonBase, Avatar, Popover, Stack } from '@mui/material';
import Cookies from 'js-cookie';

import useStyles from './styles';
import Text from '~/components/Text';
import ButtonDefault from '~/components/Button/ButtonDefault';
import ModalApp from '~/components/Modal';
import colors from '~/themes/colors';
import ROUTER from '~/variables/router';
import ErrorResponse from '~/interfaces/error-response-interfaces';
import { useAppDispatch, useAppSelector } from '~/redux/store';
import { showErrorMessage } from '~/utils/toast-util';
import { authThunkActions } from '~/redux/auth';
import { EAuthThunkActions } from '~/redux/auth/constants';
import { userDetailsSelector } from '~/redux/selectors';

const AvatarApp = memo(() => {
  const { classes, cx } = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userDetail = useAppSelector(userDetailsSelector);
  const loading = useAppSelector((state) => state.loading[EAuthThunkActions.LOGOUT]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const open = Boolean(anchorEl);

  const handleSignOut = async () => {
    try {
      await dispatch(authThunkActions.logout());
      Cookies.remove('token');
      navigate(ROUTER.login);
      setShowModal(false);
    } catch (error) {
      const errorMessage = (error as ErrorResponse).message;
      showErrorMessage(errorMessage);
    }
  };

  return (
    <>
      <ButtonBase aria-describedby={'popover'} onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Avatar sx={{ width: '32px', height: '32px', backgroundColor: colors.yellow.step10 }}>
          {userDetail.username[0]}
        </Avatar>
      </ButtonBase>
      <Popover
        id={'popover'}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        className={cx(classes.popover)}
      >
        <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
          <Avatar sx={{ width: '32px', height: '32px', backgroundColor: colors.yellow.step10 }}>
            {userDetail.username[0]}
          </Avatar>
          <Text component={'h4'} type="h4" color={colors.grey.step12}>
            {userDetail.username}
          </Text>
        </Stack>
        <Stack direction={'column'} gap={'10px'} padding={'30px 0 20px'}>
          <Text component={'p'} type="h7" color={colors.grey.step12}>
            {userDetail.department.name}
          </Text>
          <Text component={'p'} type="h7" color={colors.grey.step12}>
            Staff ID :
          </Text>
        </Stack>
        <ButtonDefault customButtonStyles={{ width: '100%' }} onClick={() => setShowModal(true)}>
          Sign Out
        </ButtonDefault>
        <Link to={ROUTER.resetPasswordSetting} style={{ display: 'block', textDecoration: 'none', margin: '10px 0' }}>
          <Text component={'span'} type="h8" color={colors.blue.step9}>
            Reset Password
          </Text>
        </Link>
      </Popover>
      <ModalApp
        open={showModal}
        onClose={() => setShowModal(false)}
        title="Do you wish to sign out?"
        onClickButtonYes={handleSignOut}
        loading={loading}
      />
    </>
  );
});

export default AvatarApp;
