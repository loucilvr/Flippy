import React, { Component } from "react";
import Welcome from "./pages/Welcome.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import StudyGuide from "./pages/StudyGuide/StudyGuide";
import "./App.css";
import flashCards from "./flashCards";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/home" component={Welcome} />
        <Route path="/study">
          <StudyGuide flashCards={flashCards} />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  </div>
);

export default App;
