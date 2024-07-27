import React, { useContext, useEffect } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from '../contexts/shop-context';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useContext(ShopContext);
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
