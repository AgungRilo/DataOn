import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ path, element }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return isAuthenticated ? (
        <Outlet path={path} element={element} />
    ) : (
        <Navigate to="/login" replace />
    );
}

export default ProtectedRoute;