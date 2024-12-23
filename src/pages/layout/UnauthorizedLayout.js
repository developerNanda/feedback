// UnauthorizedLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const UnauthorizedLayout = () => (
    <div>
        <main><Outlet /></main>
    </div>
);

export default UnauthorizedLayout;