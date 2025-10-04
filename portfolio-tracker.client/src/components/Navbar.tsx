import React from "react";
import logo from "../assets/logo.svg"

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="StockTracker Logo" width="50px"/>
                <span>Stock Tracker</span>
            </div>
            <div className="navbar-links">
                <a href="#features">Features</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
            <button className="btn-primary">Login</button>
        </nav>
    );
};

export default Navbar;
