import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <section className="login-page">
            <div className="login-box">
                <div className="login-form">
                    <form>
                        <h1>Login</h1>
                        <input type="email" placeholder="Email" required/>
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                required
                            />
                            <span
                                className="password-toggle-icon"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>
                        <button className="login-btn" type="submit">
                            Login
                        </button>
                        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                    </form>
                    <div className="separator">
                        <div className="line"></div>
                        <span className="or">Or</span>
                        <div className="line"></div>
                    </div>
                    <div className="google-btn">
                        <FcGoogle size={28} />
                        <span>Login With Google</span>
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
