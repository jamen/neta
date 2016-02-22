import React, { Component } from 'react';
import Header from './header';
import Body from './body';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
