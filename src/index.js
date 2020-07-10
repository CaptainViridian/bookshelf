import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'fontsource-roboto';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);