import React from 'react';
import './Signup.css'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Signup = () => {
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
                        <input type="password" placeholder="Create Password" required/>
                        <input type="password" placeholder="Confirm Password" required/>
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