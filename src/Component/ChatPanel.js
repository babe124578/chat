import React, { Component } from "react";
import "../CSS/ChatPanel.css";
import App from "../App";
import Message from "./Message";

class ChatPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.username,
      isLogout: false
    };
  }
  componentDidMount() {
    this.props.passRefUpwardChat(this.refs);
  }
  checkJoinStatus(value) {
    var groupList = this.props.groupList;
    var isJoin = this.props.isJoinGroupList;
    return isJoin[groupList.indexOf(value)] ? true : false;
  }

  render() {
    const username = this.state.name;
    const { allChats } = this.props;

    return this.state.isLogout ? (
      <App />
    ) : (
      <div>
        <div className="ChatRoom-container">
          <div className="chat-container" id="scrollc">
            <div className="chatbox-container">
              <ul className="chats" id="chatInput">
                {allChats[this.props.currentGroup] &&
                this.checkJoinStatus(this.props.currentGroup)
                  ? allChats[this.props.currentGroup].map(chat => (
                      <Message chat={chat} user={username} />
                    ))
                  : null}
              </ul>
              <form
                className="input"
                onSubmit={e => {
                  this.checkJoinStatus(this.props.currentGroup)
                    ? this.props.submitMessage(e)
                    : e.preventDefault();
                }}
              >
                <input
                  type="text"
                  ref="msg"
                  onChange={e => {
                    this.props.userInput(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  value="Submit"
                  className="btn btn-success"
                  id="submitButton"
                  disabled={!this.props.typeText.trim().length > 0}
                >
                  <i className="fa fa-paper-plane" id="plane" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ChatPanel;
