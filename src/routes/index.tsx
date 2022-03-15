import React, { useState } from 'react';
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NetSuitePage from '../pages/NetSuite/NetSuitePage';
import DashboardPage from '../Dashboard/DashboardPage';
import PlatformDataPage from '../pages/PlatformData/PlatformDataPage';
import ISafPage from '../pages/iSAF/ISafPage';
import SettingsPage from '../pages/Settings/SettingsPage';
import ProtectedRoute from './authGuard';
import SignIn from '../Login/SignIn';
import OktaSecurity from './okta';
import {LoginCallback, SecureRoute} from "@okta/okta-react";
import TaxesPage from "../pages/NetSuite/taxes/TaxesPage";
import CustomersPage from "../pages/NetSuite/customers/CustomersPage";
import VendorsPage from "../pages/NetSuite/vendors/VendorsPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <OktaSecurity>
                <Switch>
                    <Route path="/login/callback" component={LoginCallback} />
                    <Route path="/login" component={SignIn} />
                    <ProtectedRoute redirect='login'>
                        <Dashboard>
                            <Switch>
                                <Route path="/">
                                    <Route path="/dashboard" component={DashboardPage} />
                                    <Route path="/netsuite" component={NetSuitePage} />
                                    <Route path="/customers" component={CustomersPage} />
                                    <Route path="/vendors" component={VendorsPage} />
                                    <Route path="/taxes" component={TaxesPage} />
                                    <Route path="/platform-data" component={PlatformDataPage} />
                                    <Route path="/isaf" component={ISafPage} />
                                    <Route path="/settings" component={SettingsPage} />
                                    {/* <Redirect path="" to="  /login" /> */}
                                </Route>
                            </Switch>
                        </Dashboard>
                    </ProtectedRoute>
                </Switch>
            </OktaSecurity>
        </BrowserRouter>
    );
}

export default AppRoutes;
