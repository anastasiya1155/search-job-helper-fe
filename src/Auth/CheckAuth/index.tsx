import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';

const CheckAuth: React.FC = ({ children }) => {
  const [isOk, setIsOk] = React.useState(true);
  const location = useLocation();
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    setIsOk(!!token);
  }, [location]);

  return isOk ? <>{children}</> : <Redirect to="/login" />;
};

export default CheckAuth;
