import React, { useState } from 'react';
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NetSuitePage from '../pages/NetSuite/NetSuitePage';
import DashboardPage from '../Dashboard/DashboardPage';
import PlatformDataPage from '../pages/PlatformData/PlatformDataPage';
import ISafPage from '../pages/iSAF/ISafPage';
import SettingsPage from '../pages/Settings/SettingsPage';
import ProtectedRoute from './authGuard';
import SignIn from '../Login/SignIn';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<SignIn />} />
                <Route path="/" element={<ProtectedRoute redirect="login"><Dashboard /></ProtectedRoute>}>
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="netsuite" element={<NetSuitePage />} />
                    <Route path="platform-data" element={<PlatformDataPage />} />
                    <Route path="isaf" element={<ISafPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="" element={<Navigate replace to="/dashboard" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
