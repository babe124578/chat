import React, { Component } from "react";
import "../CSS/MessageInputField.css";

class MessageInputField extends Component {
  render() {
    return (
      <div>
        <input class="messageField" type="text" name="message" />
        <button class="sendButton" type="button">
          Send
        </button>
      </div>
    );
  }
}

export default MessageInputField;
