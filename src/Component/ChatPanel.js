import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../CSS/ChatPanel.css";
import App from "../App";
import Message from "./Message";

class ChatPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeText: "",
      name: this.props.username,
      isLogout: false,
      groupList: [],
      currentGroup: null,
      chats: [
        {
          username: "Trap",
          content: <p>message1</p>
        },
        {
          username: "Glue",
          content: <p>message2</p>
        },
        {
          username: "Kevin",
          content: <p>message3adfasdfajsdfkjasdfjkasdfklhaslkdfhkasdjfklahsdflkjhalskdfhlkds</p>,
        }
      ]
    };
    this.submitMessage = this.submitMessage.bind(this);
  }
  userInput(value) {
    this.setState({
      typeText: value
    });
  }
  submitMessage(e) {
    e.preventDefault();
    this.setState(
      {
        chats: this.state.chats.concat([
          {
            username: this.state.name,
            content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
          }
        ])
      },
      () => {
        ReactDOM.findDOMNode(this.refs.msg).value = "";
      }
    );
    scrollBot();
    this.userInput("");
  }

  render() {
    const username = this.state.name;
    const { chats } = this.state;

    return this.state.isLogout ? (
      <App />
    ) : (
      <div>
        <div className="ChatRoom-container">
          <div className="chat-container" id="scrollc">
            <div className="chatbox-container">
              <ul className="chats" id="chatInput">
                {chats.map(chat => (
                  <Message chat={chat} user={username} />
                ))}
              </ul>
              <form className="input" onSubmit={e => this.submitMessage(e)}>
                <input
                  type="text"
                  ref="msg"
                  onChange={e => {
                    this.userInput(e.target.value);
                  }}
                />
                <input
                  type="submit"
                  value="Submit"
                  disabled={!this.state.typeText.trim().length > 0}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function scrollBot() {
  var elmnt = document.getElementById("scrollc");
  elmnt.scrollIntoView();
}
export default ChatPanel;
