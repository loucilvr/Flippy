import React, { Component } from 'react';
import Welcome from './components/Welcome.js';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import StudyGuide from './components/StudyGuide';

import '../assets/App.css';


class App extends Component {
  render() {
    return (
        <div className="App">
            <Router>
                  <Switch>
                      <Route exact path="/home" component={Welcome}/>
                      <Route path="/study" component={StudyGuide}/>
                      <Redirect from="/" to="/home"/>
                  </Switch>
            </Router>
        </div>

    );
  }
}

export default App;
