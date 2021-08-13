import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Navigation from './components/Navigation';

import './App.scss'

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation/> 

            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/About" exact component={About}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
