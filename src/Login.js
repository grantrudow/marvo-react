import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onRegisterSubmit = () => {
        return history.push('/register');
    }

    const onSignIn = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login grid">
            <Link to='/'>
                <h1 className="login__logo">Marvo</h1>
            </Link>
            <div className="login__form">
                <h1>Sign In</h1>
                
                <form>
                    <h3>Email</h3>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    <h3>Password</h3>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <button onClick={onSignIn} type="submit" className="login__signIn">Sign In</button>
                </form>
                <button type="submit" onClick={onRegisterSubmit} className="login__register">Register</button>
            </div>
        </div>
    )
}

export default Login
