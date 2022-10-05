import { Outlet } from 'react-router-dom';
import { StyledLink, StyledNavLink } from 'components/Common';
import { HeaderBar } from './SharedLayout.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthorizeLinks } from 'components/AuthorizeLinks/AuthorizeLinks';
import { useAuth } from 'hooks/useAuth';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <HeaderBar>
        <div>
          <StyledLink to="/">{'Home'}</StyledLink>
          {isLoggedIn && <StyledNavLink to="/phonebook">{'My Phonebook'}</StyledNavLink>}
        </div>
        {isLoggedIn ? <UserMenu /> : <AuthorizeLinks />}
      </HeaderBar>

      <Outlet />
    </>
  );
};
