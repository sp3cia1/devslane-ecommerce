import { useContext } from 'react';
import { Navigate, Routes } from 'react-router';
import { UserContext } from '../App';

export default function ProtectedRoutes({ children }) {
  const context = useContext(UserContext);
  
  // handle case when context is undefined (during hot reload)
  if (!context) {
    return null; 
  }
  
  const { user } = context;
  
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  
  return <Routes>{children}</Routes>;
}