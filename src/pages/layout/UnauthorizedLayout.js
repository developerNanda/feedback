// UnauthorizedLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBarCustom';
import FooterPage from './Footer';
import HeaderPage from './Header';

const UnauthorizedLayout = () => (
    <div>
        <HeaderPage></HeaderPage>
        {/* <SideBar></SideBar> */}
        <main><Outlet /></main>
        <FooterPage></FooterPage>
    </div>
);

export default UnauthorizedLayout;