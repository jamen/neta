import React, { Component } from 'react';
import { Link } from 'react-router';

class BarButton extends Component {
  render() {
    return (
      <Link to={`/settings/${this.props.name.toLowerCase()}`}>
        <div className="bar-button">
          {this.props.name}
        </div>
      </Link>
    );
  }
}

export default BarButton;
