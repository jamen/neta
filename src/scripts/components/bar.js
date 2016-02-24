import React, { Component } from 'react';
import { Sect, Button } from '.';

class Bar extends Component {
  render() {
    return (
      <div className="bar">
        <Sect title="Settings">
          <Button name="Account" to="/settings/account" />
          <Button name="Chat" to="/settings/chat" />
        </Sect>

        <Sect title="Chats">
          <Button name="Foo" to="/chat/foo" />
          <Button name="Bar" to="/chat/bar" />
        </Sect>
      </div>
    );
  }
}

export default Bar;
