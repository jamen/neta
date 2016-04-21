import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div className="input">
        <input onKeyUp={this.props.keyup} />
      </div>
    );
  }
}

export default Input;
