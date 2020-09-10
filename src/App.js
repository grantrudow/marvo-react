import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import SubMenu from './SubMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Header />
            <Hero />
            <SubMenu />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
