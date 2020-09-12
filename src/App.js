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
import NewItem from './NewItem';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  const [{user, isLoggedIn}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        dispatch({
          type: 'SET_USER',
          user: user,
          isLoggedIn: true
          
        })
      } else {
        // No user is signed in.
        let loggedIn = false;
        dispatch({
          type: 'SET_USER',
          user: null,
          isLoggedIn: false
        })
      }
    });
  }, [])
  
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            {isLoggedIn ? <Redirect to='/dashboard' /> : <Login />}
          </Route>
          <Route path='/newitem'>
            <Header />
            <NewItem />
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
