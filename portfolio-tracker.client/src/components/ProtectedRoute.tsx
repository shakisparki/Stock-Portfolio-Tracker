import {Navigate } from "react-router-dom"

interface RouteProp {
    children: React.ReactNode,
    isLoggedIn: boolean
    redirectUrl: string
}

export const ProtectedRoute: React.FC<RouteProp> =
    ({ children, isLoggedIn, redirectUrl }) => {

    if (isLoggedIn) {
        return children;
    }
    else {
        return <Navigate to={redirectUrl} replace />
    }
}
