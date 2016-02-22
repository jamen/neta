import React, { Component } from 'react';
import Sidebar from './sidebar';
import Chat from './chat';

class Body extends Component {
  render() {
    return (
      <div className="body">
        <Sidebar />
        <Chat />
      </div>
    );
  }
}

export default Body;
