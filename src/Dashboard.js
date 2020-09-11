import React from 'react';
import './Dashboard.css'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Dashboard() {
	const [{ user }] = useStateValue();

	const handleSignOut = () => {
		if (user) {
			auth.signOut();
		}
	}

	return (
		<div>
			<h1>DASHBOARD</h1>
			<button onClick={handleSignOut}>Sign Out</button>
		</div>
	)
}

export default Dashboard
