import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <section className="login-page">
            <div className="login-box">
                <form className="login-form">
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="login-btn" type="submit">Login</button>
                </form>
                <div className="right-side">
                    <h2>Welcome Again!</h2>
                    <p>Welcome back! We are so happy to have you here. It's great to see you again. We hope you had a safe and enjoyable time away.</p>
                    <div>No account yet? <a href="/signup">Sign up</a></div>
                </div>
            </div>
        </section>
    );
};

export default Login;
