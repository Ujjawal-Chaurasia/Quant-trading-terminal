import { Navigate } from 'react-router';

export const ProtectedRoute = ({ children, type }) => {
  // const { isUserLoggedIn, userDetails } = useHashconnectService();

  if (type === 'auth' && isUserLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  if (type !== 'auth' && !isUserLoggedIn) {
    return <Navigate to="/" />;
  }

  if (type === 'admin' && !userDetails?.isAdmin) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};
