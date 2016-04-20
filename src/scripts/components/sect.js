import React, { Component } from 'react';
import classes from 'classnames';

class Sect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: typeof props.active !== 'undefined' ? props.active : true,
    };

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({ active: this.state.active ? false : true });
  }

  render() {
    return (
      <div className="sect">
        <span className="title" onClick={this.toggleState}>
          {this.props.title}
          <i className={classes('fa', this.state.active ? 'fa-caret-up' : 'fa-caret-down')}></i>
        </span>
        <div className={classes('items', !this.state.active && 'disabled')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Sect;
