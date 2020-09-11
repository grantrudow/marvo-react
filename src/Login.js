import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login grid">
            <Link to='/'>
                <h1 className="login__logo">Marvo</h1>
            </Link>
            <div className="login__form">
                <h1>Sign In</h1>
                
                <form>
                    <h3>Email</h3>
                    <input type="email"  />
                    <h3>Password</h3>
                    <input type="password" />
                    <button type="submit" className="login__signIn">Sign In</button>
                </form>
                <button className="login__register">Register</button>
            </div>
        </div>
    )
}

export default Login
