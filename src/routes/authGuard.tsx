import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useOktaAuth } from '@okta/okta-react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
    redirect: string
    children: any
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirect }) => {
    // const okta = useContext(OKTAAuthContext)
    // const loggedIn = okta.authStateManager.getAuthState()?.isAuthenticated //Change this to make dynamic protected routes
    let { authState } = useOktaAuth();

    // console.log(okta, loggedIn)
    if (!authState?.isAuthenticated) {
        return <Redirect to={redirect} />
    }

    return children
};

export default ProtectedRoute;
