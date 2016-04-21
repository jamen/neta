import React, { Component } from 'react';

class Chat extends Component {
  render() {
    return (
      <div className="page chat">
        Chat {this.props.params.chat}
      </div>
    );
  }
}

export default Chat;
