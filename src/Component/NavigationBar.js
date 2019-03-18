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
          <p>Group Name: {this.props.currentGroup}</p>
          <NavLink to="/CreateRoom">
            <button
              onClick={e => {
                this.props.updateCurrentPage("Create");
              }}
            >
              Create Group
            </button>
          </NavLink>
          <NavLink to="/">
            <button
              onClick={e => {
                this.props.updateUsername("");
                this.props.updateCurrentPage("Login");
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
