import React, { Component } from "react";
import "../CSS/LoginPage.css";
import { NavLink } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <div className="Login-Page">
        <div className="Field-Container">
          <h1 className="enterText">Enter Your Name</h1>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Enter name here ..."
            id="nameField"
            value={this.props.username}
            onChange={e => {
              this.props.updateInput(e.target.value);
            }}
          />
          {this.props.username.trim().length > 0 ? (
            <br />
          ) : (
            <pre className="blankAlert"> Please fill out this field.</pre>
          )}
          <div>
            <NavLink to="/ChatRoom">
              <button
                disabled={!this.props.username.trim().length > 0}
                className="btn btn-primary"
                type="submit"
                onClick={e => {
                  this.props.updateLoginStatus(true);
                }}
              >
                Enter
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginPage;
