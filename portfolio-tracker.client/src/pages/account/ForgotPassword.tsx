import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Requesting password reset for:", email);
        // TODO: call backend endpoint for password reset email

        navigate("/reset-password/token=yomamatoken");
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <img src={logo} alt="StockTracker Logo" className="auth-logo" />
                <h2>Forgot Password</h2>
                <p className="auth-subtitle">
                    Enter your email and we'll send you a reset link.
                </p>

                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button type="submit" className="btn-primary full-width">
                        Send Reset Link
                    </button>
                </form>

                <p className="auth-footer">
                    Remembered your password?{" "}
                    <Link to="/login" className="auth-link">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
