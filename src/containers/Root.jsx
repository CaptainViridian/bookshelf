import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import {
  Category, EditBook, Home, NotFound, ShowBook,
} from 'pages';

import store from 'store';
import Template from '../components/Template/Template';

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <Template>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:name" component={Category} />
            <Route path="/show-book/:id" component={ShowBook} />
            <Route path="/edit-book/:id?" component={EditBook} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Template>
      </Router>
    </Provider>
  );
}

export default <Root />;
