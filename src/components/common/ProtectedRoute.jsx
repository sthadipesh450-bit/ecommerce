import React, { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const { isLoggedIn } = useAuth();

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         Navigate ("/login");
    //     }
    // }, [Navigate])
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
  return children;
}

export default ProtectedRoute