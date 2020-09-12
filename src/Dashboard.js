import React from 'react';
import './Dashboard.css'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Overview from './Overview';
import Billing from './Billing';
import Items from './Items';

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

function Dashboard() {
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
					
						<Switch>
							<Route path='/dashboard/overview'>
								<Overview />
							</Route>
							<Route path='/dashboard/items'>
								<Items />
							</Route>
							<Route path='/dashboard/billing'>
								<Billing />
							</Route>
						</Switch>
					
				</div>
				
				{/* <button onClick={handleSignOut}>Sign Out</button> */}
			</div>
		</Router>
	)
}

export default Dashboard
