import './App.css';
import Sidebar from './components/Sidebar';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Overview from './components/pages/Overview';
import Product from './components/pages/Product';

function App() {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path="/overview" exact component={Overview} />
        <Route path="/products" exact component={Product}/>
      </Switch>
    </Router>
  );
}

export default App;
