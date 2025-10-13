import React, { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};