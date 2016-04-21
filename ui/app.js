import React, { Component } from 'react';
import { Bar } from '.';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Bar />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
