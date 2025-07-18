import { Navigate, Routes } from 'react-router';
import { withUser } from '../hoc';

function ProtectedRoutes({ children, user }) {
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  
  return <Routes>{children}</Routes>;
}

export default withUser(ProtectedRoutes);