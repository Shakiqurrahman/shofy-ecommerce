import React, { useState } from 'react';
import './Signup.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axiosInstance from '../../axiosInstance';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSignup = async(e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
    
        if (!validateEmail(email)) {
            setError("Invalid email address");
            setLoading(false);
            return;
        }
    
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            setLoading(false);
            return;
        }

        try {
            const response = await axiosInstance.post('/auth/register', {name, email, password, confirmPassword})
            console.log('Signup successful:', response.data);
        } catch (error) {
            setError(error?.response?.data?.message);
        }
        setLoading(false);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('')

    }
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
                    <form onSubmit={handleSignup}>
                        <h1>Signup</h1>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Email" required/>
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Create password"
                                value={password} onChange={(e) => setPassword(e.target.value)}
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
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <span
                                className="password-toggle-icon"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </span>
                        </div>
                        <button className="signup-btn" type="submit">
                            {loading ? 'Loading...': 'Signup'}
                        </button>
                        {error && <p className="error">{error}</p>}
                        <p className='login-text'>Already have an account? <Link to="/login">Login</Link></p>
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
                
            </div>
        </section>
    );
};

export default Signup;