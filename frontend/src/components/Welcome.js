import React from 'react';
import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';

const Welcome = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" />; // Redirect to login page if not authenticated
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <p>You are logged in.</p>
        </div>
    );
};

export default Welcome;
