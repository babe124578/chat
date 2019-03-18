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
      chats: [
        {
          username: "This",
          content: <p>message1</p>,
          timeStamp: "1:23"
        },
        {
          username: "is",
          content: <p>message2</p>,
          timeStamp: "2:34"
        },
        {
          username: "Group1",
          content: <p>message3adfasdfajsdfkjasdfjkasdfklhaslkdfhkasdjfklahsdflkjhalskdfhlkds</p>,
          timeStamp: "3.45"
        },
      ],
      allChats : {
        "" : [
        {
          username: "Test ja ",
          content: <p> Test ja</p>,
          timeStamp: "wtf"
        }],
        "Group1" : [
        {
          username: "This",
          content: <p>This</p>,
          timeStamp: "1:23"
        },
        {
          username: "is",
          content: <p>is</p>,
          timeStamp: "2:34"
        },
        {
          username: "Group1",
          content: <p>group1</p>,
          timeStamp: "3.45"
        },
      ],
      "Group2" : [
        {
          username: "This",
          content: <p>This</p>,
          timeStamp: "1:23"
        },
        {
          username: "is",
          content: <p>is</p>,
          timeStamp: "2:34"
        },
        {
          username: "Group2",
          content: <p>group2</p>,
          timeStamp: "3.45"
        },
      ],
      "Group3" : [
        {
          username: "This",
          content: <p>This</p>,
          timeStamp: "1:23"
        },
        {
          username: "is",
          content: <p>is</p>,
          timeStamp: "2:34"
        },
        {
          username: "Group3",
          content: <p>Group3</p>,
          timeStamp: "3.45"
        },
      ]
      }
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
    const { chats,allChats} = this.state;

    return this.state.isLogout ? (
      <App />
    ) : (
      <div>
        <div className="ChatRoom-container">
          <div className="chat-container" id="scrollc">
            <div className="chatbox-container">
              <ul className="chats" id="chatInput">
                {allChats[this.props.currentGroup].map(chat => (
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
