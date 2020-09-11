import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import SubMenu from './SubMenu';
import Collections from './Collections';
import Products from './Products';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function App() {
  const [{user}, dispatch] = useStateValue();
  const loggedIn = false;

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>', authUser);

      if (authUser) {
        loggedIn = true;
        // The user just logged in/was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  console.log('User is logged in??', loggedIn)

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            {loggedIn ? <Redirect to='/dashboard' /> : <Login />}
          </Route>
          <Route path='/dashboard'>
            <Header />
            <Dashboard />
          </Route>
          <Route path="/">
            <Header />
            <Hero />
            <SubMenu />
            <Collections />
            <Products />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
