import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedin } from 'redux/selectors';
import { SectionCenter } from 'components/Common/StyledComponents';
import { AuthForm } from 'components/AuthForm/AuthForm';

export const UserForm = ({ type = 'signup' }) => {
  const isLoggedin = useSelector(selectIsLoggedin);

  return <SectionCenter>{isLoggedin ? <Navigate to="/phonebook" replace /> : <AuthForm type={type} />}</SectionCenter>;
};

export default UserForm;
