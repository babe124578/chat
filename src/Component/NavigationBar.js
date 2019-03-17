import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/NavigationBar.css";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <p>Welcome: {this.props.username}</p>
          <p>Group List</p>
          <p>This Room Name</p>
          <button>Create Group</button>
          <NavLink to="/">
            <button
              onClick={e => {
                this.props.updateUsername("");
                this.props.updateLoginStatus(false);
              }}
            >
              Logout
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
