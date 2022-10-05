import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedin } from 'redux/selectors';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedin);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};
