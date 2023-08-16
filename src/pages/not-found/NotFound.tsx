import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ROUTER from '~/variables/router';

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get('token');
    !token ? navigate(ROUTER.login) : navigate(-1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default NotFound;
