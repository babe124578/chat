import React, { Component } from "react";
import "../CSS/LoginPage.css";
import { NavLink } from "react-router-dom";

class LoginPage extends Component {
  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(e) {
    if (this.props.username.trim().length > 0)
      this.props.updateCurrentPage("Chat");
    else return false;
  }

  render() {
    return (
      <div className="Login-Page">
        <div className="Field-Container">
          <h1 className="enterText">Enter Your Name</h1>
          <br />
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name here ..."
              id="nameField"
              onChange={e => {
                this.props.updateUsername(e.target.value);
              }}
            />
          </form>
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
                  this.props.updateCurrentPage("Chat");
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
