import React from 'react';
import ReactDOM from 'react-dom';

import 'fontsource-roboto';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import {
  Home,
  Category,
  NotFound,
  ShowBook,
  EditBook
} from 'pages';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/category/:name" component={Category} />
      <Route path="/show-book/:id" component={ShowBook} />
      <Route path="/edit-book/:id?" component={EditBook} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
);