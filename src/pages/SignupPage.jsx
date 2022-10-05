import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedin } from 'redux/selectors';
import { SectionCenter } from 'components/Common/StyledComponents';
import { SignupForm } from 'components/AuthForms';

export const SignupPage = () => {
  const isLoggedin = useSelector(selectIsLoggedin);

  return <SectionCenter>{isLoggedin ? <Navigate to="/phonebook" replace /> : <SignupForm />}</SectionCenter>;
};

export default SignupPage;
