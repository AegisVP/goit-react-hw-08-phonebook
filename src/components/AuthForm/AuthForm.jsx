import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from 'redux/auth/authOperations';
import { registerUser } from 'redux/auth/authOperations';
import { SectionCenter, StyledForm, StyledLabel, StyledInput, StyledButton } from 'components/Common';
import { selectIsLoggedin } from 'redux/selectors';

export const AuthForm = ({ type = 'signup' }) => {
  const dispatch = useDispatch();
  const isLoggedin = useSelector(selectIsLoggedin);

  const handleFormSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;

    if (type === 'signup') {
      const { name } = e.currentTarget.elements;
      dispatch(
        registerUser({
          name: name.value,
          email: email.value,
          password: password.value,
        })
      );
    } else {
      dispatch(
        loginUser({
          email: email.value,
          password: password.value,
        })
      );
    }

    e.currentTarget.reset();
  };

  return (
    <SectionCenter>
      {isLoggedin ? (
        <Navigate to="/" replace />
      ) : (
        <StyledForm onSubmit={handleFormSubmit} autoComplete="on">
          {type === 'signup' && (
            <StyledLabel>
              Username:
              <StyledInput autoComplete="username" type="text" name="name" />
            </StyledLabel>
          )}
          <StyledLabel>
            Email:
            <StyledInput autoComplete="email" type="email" name="email" />
          </StyledLabel>
          <StyledLabel>
            Password:
            <StyledInput autoComplete="current-password" type="password" name="password" />
          </StyledLabel>

          <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
      )}
    </SectionCenter>
  );
};
