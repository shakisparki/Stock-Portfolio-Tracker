import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
                        <Route path="/register" element={isLoggedIn ? <Dashboard /> : <Register/>} />
                        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login onLogin={login} />} />
                        {/* Add other routes as needed */}
                    </Routes>
                    <Footer />
                </Router>
            </div>
    );
};

export default App;
