import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from '../../axiosInstance.js'
import "./Login.css";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
    
        if (!validateEmail(email)) {
            setError("Invalid email address");
            setLoading(false);
            return;
        }

        try {
            const response = await axiosInstance.post('/auth/login', { email, password });
            console.log('Login successful:', response.data);
            navigate(from, { replace: true });
        } catch (error) {
            // Handle different types of errors
            if (error.response) {
                const status = error.response.status;
                if (status === 401) {
                    setError("Invalid email or password");
                } else if (status === 500) {
                    setError("Network error. Please check your connection.");
                } else {
                    setError("An unexpected error occurred. Please try again later.");
                }
            } else if (error.request) {
                setError("Network error. Please check your connection.");
            } else {
                setError("An error occurred. Please try again.");
            }
        }
        setLoading(false);
        setEmail('');
        setPassword('');
    };
    
    return (
        <section className="login-page">
            <div className="login-box">
                <div className="login-form">
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="password-toggle-icon"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <AiFillEyeInvisible />
                                ) : (
                                    <AiFillEye />
                                )}
                            </span>
                        </div>
                        <button className="login-btn" type="submit">
                            {loading ? 'Loading...' : 'Login'}
                        </button>
                        {error && <p className="error">{error}</p>}
                        
                        
                        <p className="signup-text">
                            Don't have an account?{" "}
                            <Link to="/signup">Signup</Link>
                        </p>
                    </form>
                    <div className="separator">
                        <div className="line"></div>
                        <span className="or">Or</span>
                        <div className="line"></div>
                    </div>
                    <div className="google-btn">
                        <FcGoogle size={28} />
                        <span>Continue With Google</span>
                    </div>
                </div>
                <div className="right-side">
                    <h2>Welcome Again!</h2>
                    <p>
                        Welcome back! We are so happy to have you here. It's
                        great to see you again. We hope you had a safe and
                        enjoyable time away.
                    </p>
                    <div>
                        No account yet? <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
