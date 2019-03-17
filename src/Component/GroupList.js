import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import "../CSS/ChatRoom.css";

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: [],
      testIndex: 0,
      currentGroup: null,
    };
  }
  createGroup() {
    this.state.groupList.push("group" + this.state.testIndex);
    const item = this.state.groupList;
    const title = "";
    const text = "";
    item.push({ title, text });
    this.setState({ groupList: item });
  }

  render() {
    /* const username = this.state.name;
   const { chats } = this.state;*/

    return (
      <div className="group-container">
        {/*<div className="message">
              <div className="datetime">
                <NavLink to="/JoinRoom">
                  <button type="submit">Join Group</button>
                </NavLink>
              </div>
              <p>Group</p>
            </div>*/}

        <div>
          {this.state.groupList.map((item, { testIndex }) => {
            return (
              <div className="message" key={testIndex}>
                <div className="datetime">
                  <NavLink to="/JoinRoom">
                    <button type="submit">Join Group</button>
                  </NavLink>
                </div>
                <p>group {testIndex}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GroupList;
