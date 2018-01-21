import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import Welcome from './components/Welcome.js';
import StudyGuideName from './components/StudyGuideCreation.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Welcome/>
          <StudyGuideName/>
      </div>
    );
  }
}

export default App;
