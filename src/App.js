import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import SubMenu from './SubMenu';
import Collections from './Collections';
import Products from './Products';
import Footer from './Footer';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/login'>
            <Login />
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
