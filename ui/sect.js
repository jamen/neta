import React, { Component } from 'react';
import classes from 'classnames';

class Sect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: typeof props.active !== 'undefined' ? props.active : true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const active = this.state.active;
    return (
      <div className="sect">
        <span className="title" onClick={this.toggle}>
          {this.props.title}
        <i className={classes('fa', `fa-caret-${active ? 'up' : 'down'}`)}></i>
        </span>
        <div className={classes('items', !active && 'disabled')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Sect;
