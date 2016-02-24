import { render } from 'react-dom';
import React from 'react';
import { App, Chat, Settings, Home } from './components';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

window.onload = function load() {
  const main = document.getElementById('main');
  render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="chat/:chat" component={Chat} />
        <Route path="settings/:page" component={Settings} />
      </Route>
    </Router>),
    main
  );
};
