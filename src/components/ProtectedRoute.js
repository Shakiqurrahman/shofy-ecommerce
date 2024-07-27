import React, { useEffect } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
    const location = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login', { state: { from: location }, replace: true });
        }
    }, [isAuthenticated, navigate]);

    return element;
};

export default ProtectedRoute;
