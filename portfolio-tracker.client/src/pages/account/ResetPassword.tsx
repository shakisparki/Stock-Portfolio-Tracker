import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

const ResetPassword: React.FC = () => {
    const { token } = useParams<{ token: string }>(); // token from reset link
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Resetting password for token:", token);
        // TODO: call backend API with token + new password

        navigate("/login")
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <img src={logo} alt="StockTracker Logo" className="auth-logo" />
                <h2>Reset Password</h2>
                <p className="auth-subtitle">Enter your new password below.</p>

                <form onSubmit={handleSubmit}>
                    <label>New Password</label>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="btn-primary full-width">
                        Reset Password
                    </button>
                </form>

                <p className="auth-footer">
                    Back to{" "}
                    <Link to="/login" className="auth-link">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ResetPassword;
