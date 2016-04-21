import React, { Component } from 'react';
import { Input } from '.';
import { createServer, createConnection } from 'net';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'unconnected',
      messages: [],
    };

    this.connect = this.connect.bind(this);
    this.message = this.message.bind(this);

    this.relay = createServer(peer => {
      this.setState({ messages: [] });
      this.incoming = peer;

      this.incoming.on('data', (message) => this.message('Peer', message));
    });

    this.relay.listen(1300);
  }

  connect(addr) {
    const [ip, port] = addr.split(':');
    this.peer = createConnection(parseInt(port, 10), ip);

    this.peer.on('connect', () => {
      this.setState({ status: 'connected' });
    });

    this.peer.on('end', () => {
      this.setState({ status: 'unconnected' });
    });
  }

  message(user, message) {
    this.state.messages.push({ user, message: message.toString() });
    this.forceUpdate();
  }

  render() {
    return (
      <div className="page home">
        <span>{"Peer's address (press enter to connect):"}</span>
        <Input
          keyup={({ keyCode, target }) => {
            console.log(keyCode);
            if (keyCode === 13) this.connect(target.value);
          }}
        />
        <span>{"Message (press enter to send):"}</span>
        <Input
          keyup={({ keyCode, target }) => {
            if (keyCode === 13) {
              this.peer.write(target.value);
              this.message('You', target.value);
            }
          }}
        />
        <span>Status: {this.state.status}</span>
        <div>
          {this.state.messages.map(m => (<div>{m.user}: {m.message}</div>))}
        </div>
      </div>
    );
  }
}

export default Home;
