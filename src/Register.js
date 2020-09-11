import React, { useState } from 'react';
import './Register.css';
import { Link, useHistory } from 'react-router-dom';
import { auth, db } from './firebase';

function Register() {
	const history = useHistory();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	
	const register = event => {
		event.preventDefault();
		
		if (password === passwordConfirm) {
			auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				db.collection('users').add({
					firstName: firstName,
					lastName: lastName,
					email: email,
				})
				.then(function(docRef) {
					console.log('Document written with ID: ', docRef)
					history.push('/')
				})
				.catch(function(error) {
					console.error('Error adding document: ', error)
				})
			})
		} else {
			alert('Passwords do not match')
		}
	}


	return (
		<div className="register grid">
            <Link to='/'>
                <h1 className="register__logo">Marvo</h1>
            </Link>
            <div className="register__form">
                <h1>Sign Up</h1>
                
                <form>
					<h3>First Name</h3>
					<input type="text" value={firstName} onChange={event => setFirstName(event.target.value)}/>
					<h3>Last Name</h3>
					<input type="text" value={lastName} onChange={event => setLastName(event.target.value)}/>
                    <h3>Email</h3>
                    <input type="email"  value={email} onChange={event => setEmail(event.target.value)}/>
                    <h3>Password</h3>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
					<h3>Confirm Password</h3>
					<input type="password" value={passwordConfirm} onChange={event => setPasswordConfirm(event.target.value)}/>
                    
					<button 
					onClick={register} 
					type="submit" 
					className="register__signIn">Sign Up</button>
                </form>
            </div>
        </div>
	)
}

export default Register;
