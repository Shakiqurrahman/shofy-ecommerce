import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Form submitted with:", { email, password });

        setLoading(true);
        try {
            const response = await fetch('http://localhost:8101/api/auth/login', { // Replace with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                // Handle successful login, e.g., redirect to a different page
                console.log('Login successful:', data);
            } else {
                // Handle login failure
                console.error('Login failed:', data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
        setEmail("");
        setPassword("");
        setLoading(false);
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
                        <p>
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
