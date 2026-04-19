import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth, type UserRole } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactElement;
  requiredRole?: UserRole;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-primary font-headline italic text-4xl animate-pulse">
        Initializing...
      </div>
    );
  }

  if (!user) {
    // Redirect to a public login page or the landing
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (requiredRole && user.role !== requiredRole && user.role !== 'OWNER') {
    // If not an owner and doesn't have the required role, forbidden
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
