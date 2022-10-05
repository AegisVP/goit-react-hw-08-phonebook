import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedin } from 'redux/selectors';
import { SectionCenter } from 'components/Common/StyledComponents';
import { LoginForm } from 'components/AuthForms';

export const LoginPage = () => {
  const isLoggedin = useSelector(selectIsLoggedin);

  return <SectionCenter>{isLoggedin ? <Navigate to="/phonebook" replace /> : <LoginForm />}</SectionCenter>;
};

export default LoginPage;
