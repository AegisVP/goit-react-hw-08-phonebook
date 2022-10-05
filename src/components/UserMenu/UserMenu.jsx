import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledNavLink } from 'components/Common';
import { selectIsLoggedin, selectUser } from 'redux/selectors';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user } = useAuth();
  // const user = useSelector(selectUser);

  return (
    <div>
      {`Welcome, ${user?.name} | `}
      <StyledNavLink to="/logout">Log out</StyledNavLink>
    </div>
  );
};
