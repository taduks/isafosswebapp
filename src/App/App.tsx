import React, { useState } from 'react';
import logo from '../logo.svg';
import './App.css';
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NetSuitePage from '../pages/NetSuite/NetSuitePage';
import SignIn from '../Login/SignIn';
import DashboardPage from '../Dashboard/DashboardPage';
import PlatformDataPage from '../pages/PlatformData/PlatformDataPage';
import ISafPage from '../pages/iSAF/ISafPage';
import SettingsPage from '../pages/Settings/SettingsPage';

function App() {
    const [token, setToken] = useState(false);

  return (
      <div className="wrapper">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Dashboard />}>
                      <Route path="dashboard" element={<DashboardPage />} />
                      <Route path="netsuite" element={<NetSuitePage />} />
                      <Route path="platform-data" element={<PlatformDataPage />} />
                      <Route path="isaf" element={<ISafPage />} />
                      <Route path="settings" element={<SettingsPage />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
