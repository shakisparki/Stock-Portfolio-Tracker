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

const App: React.FC = () => {
    const {isLoggedIn, login, logout } = useAuth();

    return (
            <div className="app-container">
                <Router>
                    <Navbar isLoggedIn={isLoggedIn} onLogout={logout} />
                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={isLoggedIn ? <Dashboard /> : <Login onLogin={login} />} />
                        <Route path="/register" element={isLoggedIn ? <Dashboard /> : <Register />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset-password/:token" element={<ResetPassword />} />
                        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login onLogin={login} />} />
                        {/* Add other routes as needed */}
                    </Routes>
                    <Footer />
                </Router>
            </div>
    );
};

export default App;
