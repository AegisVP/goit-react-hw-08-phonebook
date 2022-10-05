import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from 'components/Common/LoadingPage';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsRefreshingUser } from 'redux/selectors';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const CommonLayout = lazy(() => import('pages/CommonLayout'));
const Phonebook = lazy(() => import('pages/Phonebook'));
const AddContact = lazy(() => import('pages/AddContact'));
const UserForm = lazy(() => import('pages/UserForm'));
const Logout = lazy(() => import('pages/Logout'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isRefreshing) return;

    console.log(' - Dispatching refreshUser');
    dispatch(refreshUser());
    console.log(' - Finished refreshUser');
  }, [dispatch, isRefreshing]);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Suspense fallback={<Loading text="Loading interface..." />}>
            <CommonLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loading text="Welcome to your phonebook manager" />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="phonebook"
          element={
            <Suspense fallback={<Loading text="Loading phonebook..." />}>
              <PrivateRoute redirectTo='/login' component={<Phonebook />} />
            </Suspense>
          }
        />
        <Route
          path="phonebook/addContact"
          element={
            <Suspense fallback={<Loading text="Loading form..." />}>
              <AddContact />
            </Suspense>
          }
        />
        <Route
          path="signup"
          element={
            <Suspense fallback={<Loading text="Loading Signup form..." />}>
              <UserForm type="signup" />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback="">
              <UserForm type="login" />
            </Suspense>
          }
        />
        <Route
          path="logout"
          element={
            <Suspense fallback={<Loading text="Logging out..." />}>
              <Logout />
            </Suspense>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
