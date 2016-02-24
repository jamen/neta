import React, { Component } from 'react';
import { BarSect, BarButton } from '.';

class Bar extends Component {
  render() {
    return (
      <div className="bar">
        <BarSect title="Settings">
          <BarButton name="Account" />
          <BarButton name="Chat" />
        </BarSect>
      </div>
    );
  }
}

export default Bar;
