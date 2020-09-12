import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './Dashboard.css'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

import Overview from './Overview';
import Billing from './Billing';
import Items from './Items';
import Sidebar from './Sidebar';
import NewItem from './NewItem';

const items = [
	{name: 'overview', label: 'Overview'},
	{
		name: 'billing',
		label: 'Billing',
		items: [
			{name: 'balances', label: 'Balances'},
			{name: 'reports', label: 'Reports'}
		]
	},
	{name: 'items', label: 'Items'},
	{name: 'settings', label: 'Settings'},
	{name: 'logout', label: 'Log Out'}
  ]

function Dashboard({ match }) {
	const [{ user }] = useStateValue();

	const handleSignOut = () => {
		if (user) {
			auth.signOut();
		}
	}

	return (
		<Router>
			<div className="dashboard grid">
				<div className="dashboard__title">
					<h1>Dashboard</h1>
				</div>
				<div className="dashboard__left">
					<Sidebar items={items} />
				</div>
				<div className="dashboard__main">
					<Route path='/dashboard/overview'>
						<Overview />
					</Route>
					<Route path='/dashboard/items'>
						<Items />
					</Route>
					<Route path='/dashboard/billing'>
						<Billing />
					</Route>
					<Route path='/dashboard/new-item'>
						<NewItem />
					</Route>
				</div>
				
				<button onClick={handleSignOut}>Sign Out</button>
			</div>
		</Router>
	)
}

export default Dashboard;