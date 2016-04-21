import React, { Component } from 'react';
import { Link } from 'react-router';

class Button extends Component {
  render() {
    const btn = (<div className="button">{this.props.name}</div>);

    if (typeof this.props.to !== 'undefined') {
      return (<Link to={this.props.to}>{btn}</Link>);
    }

    return btn;
  }
}

export default Button;
