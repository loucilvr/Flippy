import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import './assets/index.css';
import { Route } from 'react-router-dom';

ReactDOM.render(
  <Route basename={process.env.PUBLIC_URL}>
      <App/>
  </Route>,
  document.getElementById('root')
);
