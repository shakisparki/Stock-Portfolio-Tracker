import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} StockTracker. All rights reserved.</p>
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </footer>
    );
};

export default Footer;
