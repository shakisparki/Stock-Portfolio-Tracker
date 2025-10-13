import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
             /*https://localhost:7172/register*/
            const response = await fetch("/login?useSessionCookies=true", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                    "twoFactorCode": "null",
                    "twoFactorRecoveryCode": "null"
                }),
            });
            if (response.ok) {
                onLogin();
                navigate("/dashboard");
            } else {
                setError("Invalid credentials");
            }
        } catch (exceptionVar) {
            setError("Login failed" + exceptionVar);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <img src={logo} alt="StockTracker Logo" className="auth-logo" />
                <h2>Welcome Back</h2>
                <p className="auth-subtitle">Log in to track your portfolio</p>

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

                    <button type="submit" className="btn-primary full-width">
                        Login
                    </button>
                </form>

                <p className="auth-footer">
                    Don't have an account?{" "}
                    <Link to="/register" className="auth-link">
                        Register
                    </Link>
                </p>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
};

export default Login;
