import React, { Component } from 'react';

class Settings extends Component {
  render() {
    return (
      <div className="page settings">
        {this.props.params.what}
      </div>
    );
  }
}

export default Settings;
