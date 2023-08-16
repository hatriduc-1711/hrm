import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ROUTER from '~/variables/router';

const ProtectedRouter = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get('token')) navigate(ROUTER.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default ProtectedRouter;
