import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { OKTAAuthContext } from "../App/App";

interface ProtectedRouteProps {
    redirect: string
    children: any
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirect }) => {
    const okta = useContext(OKTAAuthContext)
    const loggedIn = okta.authStateManager.getAuthState()?.isAuthenticated //Change this to make dynamic protected routes
    let location = useLocation();


    if (!loggedIn) {
        return <Navigate to={redirect} state={{ from: location }} replace />
    }

    return children
};

export default ProtectedRoute;
