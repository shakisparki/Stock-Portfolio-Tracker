import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import ForgotPassword from "./pages/account/ForgotPassword";
import ResetPassword from "./pages/account/ResetPassword";
import Dashboard from "./pages/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute"

const App: React.FC = () => {
    const {isLoggedIn, login, logout } = useAuth();

    return (
            <div className="app-container">
                <Router>
                    <Navbar isLoggedIn={isLoggedIn} onLogout={logout} />
                    <Routes>
                        {/*Account routes*/}
                        <Route path="/login" element={<Login onLogin={login} isLoggedIn={isLoggedIn} />} />
                        <Route path="/register" element={<Register isLoggedIn={isLoggedIn} />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset-password/:token" element={<ResetPassword />} />

                        {/*Anonymous routes*/}
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />

                        {/*Authenticated routes*/}
                        <Route path="/dashboard" element={
                            <ProtectedRoute isLoggedIn={isLoggedIn} redirectUrl="/login?redirectUrl=/dashboard">
                                <Dashboard />
                            </ProtectedRoute>
                        } />
 
                    </Routes>
                    <Footer />
                </Router>
            </div>
    );
};

export default App;
