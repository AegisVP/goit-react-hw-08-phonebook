import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from 'redux/auth/authOperations';
import { SectionCenter, StyledForm, StyledLabel, StyledInput, StyledButton } from 'components/Common';
import { selectIsLoggedin } from 'redux/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedin = useSelector(selectIsLoggedin);

  const handleFormSubmit = e => {
    e.preventDefault();

    dispatch(
      loginUser({
        email: e.currentTarget.elements.email.value,
        password: e.currentTarget.elements.password.value,
      })
    );

    e.currentTarget.reset();
  };

  return (
    <SectionCenter>
      {isLoggedin ? (
        <Navigate to="/" replace />
      ) : (
        <StyledForm onSubmit={handleFormSubmit} autoComplete="on">
          <StyledLabel>
            Email:
            <StyledInput autoComplete="email" type="email" name="email" />
          </StyledLabel>
          <StyledLabel>
            Password:
            <StyledInput autoComplete="current-password" type="password" name="password" />
          </StyledLabel>

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      )}
    </SectionCenter>
  );
};
