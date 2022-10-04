import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledNavLink } from 'components/Common';
import { selectIsLoggedin, selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const isLoggedin = useSelector(selectIsLoggedin);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  if (!isLoggedin) navigate('/login');

  return (
    <div>
      {`Welcome, ${user?.name} | `}
      <StyledNavLink to="/logout">Log out</StyledNavLink>
    </div>
  );
};
