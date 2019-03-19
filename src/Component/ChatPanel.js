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
    let tmp = Object.assign({}, this.state.allChats);    //creating copy of object
    tmp[this.props.currentGroup] = this.state.allChats[this.props.currentGroup].concat([{
            username: this.state.name,
            content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
            timeStamp: "23:59"
          }]);  
    this.setState(
      {
        allChats : tmp
        
      }

    );
    ReactDOM.findDOMNode(this.refs.msg).value = "";
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
                {allChats[this.props.currentGroup] ? (allChats[this.props.currentGroup].map(chat => (
                  <Message chat={chat} user={username} />
                ))
                ) : ( null )
              }
              </ul>
              <form className="input" onSubmit={e => this.submitMessage(e)}>
                <input
                  type="text"
                  ref="msg"
                  onChange={e => {
                    this.userInput(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  value="Submit"
                  className="btn btn-success"
                  id='submitButton'
                  disabled={!this.state.typeText.trim().length > 0}
                ><i class="fa fa-paper-plane" id='plane' aria-hidden="true"></i></button>
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
