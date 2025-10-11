import React from "react";
import logo from "../assets/logo.svg";

interface NavbarProps {
    isLoggedIn: boolean;
    onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-logo">
                <img src={logo} alt="StockTracker Logo" width="50px"/>
                <span>Stock Tracker</span>
            </a>
            <div className="navbar-links">
                <a href="#features">Features</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                {isLoggedIn && <a href="/dashboard">Dashboard</a>}
            </div>
            {
                isLoggedIn
                    ? <button className="btn-primary" onClick={onLogout}>Logout</button>
                    : <a href="/login" className="btn-primary">Login</a>
            }
        </nav>
    );
};

export default Navbar;
