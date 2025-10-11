import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () =>
        setIsLoggedIn(true);
    const handleLogout = () =>
        setIsLoggedIn(false);

    return (
        <div className="app-container">
            <Router>
                <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                <Routes>

                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
                    <Route path="/register" element={isLoggedIn ? <Dashboard /> : <Register/>} />
                    <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
                    {/* Add other routes as needed */}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
