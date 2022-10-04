import { Outlet } from 'react-router-dom';
import { StyledLink, StyledNavLink } from 'components/Common';
import { HeaderBar } from './SharedLayout.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthorizeLinks } from 'components/AuthorizeLinks/AuthorizeLinks';
import { useSelector } from 'react-redux';
import { selectIsLoggedin } from 'redux/selectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);

  return (
    <>
      <HeaderBar>
        <div>
          <StyledLink to="/">{'Home'}</StyledLink>
          {isLoggedIn && <StyledNavLink to="/contacts">{'My Phonebook'}</StyledNavLink>}
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthorizeLinks />}
      </HeaderBar>
      
      <Outlet />
    </>
  );
};
