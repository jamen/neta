import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './components';

document.addEventListener('DOMContentLoaded', function domLoad() {
  const main = document.getElementById('main');
  ReactDOM.render(<App />, main);
});
