import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

const AuthorizedLayout = () => {
    return isAuthenticated() ? (
        <div>
            <header>Private Header</header>
            <main><Outlet /></main>
            <footer>Private Footer</footer>
        </div>
    ) : (
        <Navigate to="/login" />
    );
};

export default AuthorizedLayout;