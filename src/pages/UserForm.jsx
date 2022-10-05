import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedin } from 'redux/selectors';
import { SectionCenter } from 'components/Common/StyledComponents';
import { SignupForm, LoginForm } from 'components/AuthForms';

export const UserForm = ({ type = 'signup' }) => {
  const isLoggedin = useSelector(selectIsLoggedin);

  return <SectionCenter>{isLoggedin ? <Navigate to="/phonebook" replace /> : type === 'signup' ? <SignupForm /> : <LoginForm />}</SectionCenter>;
};

export default UserForm;
