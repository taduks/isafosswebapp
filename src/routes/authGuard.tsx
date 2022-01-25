import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
    redirect: string
    children: any
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirect }) => {
    const loggedIn = true //Change this to make dynamic protected routes
    let location = useLocation();

    if (!loggedIn) {
        return <Navigate to={redirect} state={{ from: location }} replace />
    }

    return children
};

export default ProtectedRoute;
