import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logoutUser } from 'redux/auth/authOperations';
import { selectIsLoggedin, selectIsRefreshingUser } from 'redux/selectors';
import { debug } from 'utils/debug';

export const Logout = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  const isRefreshing = useSelector(selectIsRefreshingUser);
  const dispatch = useDispatch();

  debug('isLoggedIn:', isLoggedIn);
  debug('isRefreshing:', isRefreshing);

  if (isLoggedIn) dispatch(logoutUser());
  return <Navigate to="/login" replace />;
};

export default Logout;
