import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Chat from './chat';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Sidebar />
        <Chat />
      </div>
    );
  }
}

export default App;
