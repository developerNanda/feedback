import React, { useState, useEffect } from 'react';
import Feedback from './pages/feedbackPage/FeedbackPage';
import { Route, Router, Routes } from 'react-router-dom';
import UnauthorizedLayout from './pages/layout/UnauthorizedLayout';
import AuthorizedLayout from './pages/layout/AuthorizedLayout';
import Page404 from './pages/404/404'
import DashboardPage from './pages/dashboard/Dashboard';
import LoginPage from './pages/auth/LoginPage';
import FeedbackPage from './pages/feedbackPage/FeedbackPage';
import QRCodePage from './pages/QRCode/QRCode';

function App() {

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<UnauthorizedLayout />}>
        <Route path="/" element={<Page404 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/feedback/:qrcode/:restarentcode" element={<FeedbackPage />} />
        <Route path="/qrcode" element={<QRCodePage />} />
      </Route>

      {/* Private Routes */}
      <Route element={<AuthorizedLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
