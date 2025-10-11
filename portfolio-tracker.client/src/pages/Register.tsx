import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Register: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        console.log("Registering:", { email, password });
        setError("");
        try {
            const response = await fetch("https://localhost:7172/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                }),
            });
            if (response.ok) {
                //onLogin();
                navigate("/dashboard");
            } else {
                const result = await response.json();
                const firstErrorKey = Object.keys(result.errors)[0];

                setError(result.errors[firstErrorKey][0]);
            }
        } catch {
            setError("Registration failed");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <img src={logo} alt="StockTrackr Logo" className="auth-logo" />
                <h2>Create Account</h2>
                <p className="auth-subtitle">Sign up to manage your investments</p>

                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>
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
                        Register
                    </button>
                </form>

                <p className="auth-footer">
                    Already have an account?{" "}
                    <Link to="/login" className="auth-link">
                        Login
                    </Link>
                </p>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
};

export default Register;
