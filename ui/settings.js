import React, { Component } from 'react';

class Settings extends Component {
  render() {
    return (
      <div className="page settings">
        The {this.props.params.page} settings page
      </div>
    );
  }
}

export default Settings;
