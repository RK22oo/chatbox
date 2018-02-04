import React, { Component } from 'react';
import Chat from "./Chat";
import UserList from "./userList";
import './style.css';

const image = 'https://www.gstatic.com/webp/gallery3/2.png';
//const image2 = 'http://www.gstatic.com/webp/gallery/2.jpg';

class App extends Component {
  // initial state
  state = {
    messages: [
      {
        type: 0,
        image,
        text: "Hello! Good Morning!"
      },
      {
        type: 1,
        image,
        text: "Hello! Good Afternoon!"
      }
    ],
  };

  handleNewMessage = text =>
    this.setState({
      messages: this.state.messages.concat([{
        text,
        type: 0,
        image,
      }])
    });

  render() {
    return (
      <div className="row">
      <div className="col-s4">
      <UserList/>
      </div>
      <div className="col-s8">
      <Chat
        messages={this.state.messages}
        onNewMessage={this.handleNewMessage}
      />
      </div>
      </div>
    );
  }
}

export default App;
