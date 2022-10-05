import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logoutUser } from 'redux/auth/authOperations';
import { selectIsLoggedin, selectIsRefreshingUser } from 'redux/selectors';

export const Logout = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  const isRefreshing = useSelector(selectIsRefreshingUser);
  const dispatch = useDispatch();

  console.log('isLoggedIn:', isLoggedIn);
  console.log('isRefreshing:', isRefreshing);

  if (isLoggedIn) dispatch(logoutUser());
  return <Navigate to="/login" replace />;
};

export default Logout;
