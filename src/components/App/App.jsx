import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from 'components/Common/LoadingPage';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsRefreshingUser, selectToken } from 'redux/selectors';
import { debug } from 'utils/debug';

const HomePage = lazy(() => import('pages/HomePage'));
const CommonLayout = lazy(() => import('pages/CommonLayout'));
const Phonebook = lazy(() => import('pages/Phonebook'));
const AddContact = lazy(() => import('pages/AddContact'));
const UserForm = lazy(() => import('pages/UserForm'));
const Logout = lazy(() => import('pages/Logout'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshingUser);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  debug('isRefreshing:', isRefreshing);

  if (isRefreshing) {
    debug(' - Dispatching refreshUser');
    dispatch(refreshUser(token));
    debug(' - Finished refreshUser');
  }

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
          path="contacts"
          element={
            <Suspense fallback={<Loading text="Loading phonebook..." />}>
              <Phonebook />
            </Suspense>
          }
        />
        <Route
          path="contacts/add"
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
