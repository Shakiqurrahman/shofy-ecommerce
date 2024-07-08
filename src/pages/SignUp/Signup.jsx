import React, { useState } from 'react';
import './Signup.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    return (
        <section className="signup-page">
            <div className="signup-box">
            <div className="right-side">
                    <h2>Come join us!</h2>
                    <p>
                        we are so excited to have you here. If you haven't already, create an account to get access to exclusive offers & discounts.
                    </p>
                    <div>
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </div>
                <div className="signup-form">
                    <form>
                        <h1>Signup</h1>
                        <input type="email" placeholder="Email" required/>
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Create password"
                                required
                            />
                            <span
                                className="password-toggle-icon"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>
                        <div className="password-container">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm password"
                                required
                            />
                            <span
                                className="password-toggle-icon"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>
                        <button className="signup-btn" type="submit">
                            Signup
                        </button>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
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
                
            </div>
        </section>
    );
};

export default Signup;