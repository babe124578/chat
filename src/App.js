import React, { Component } from "react";
import "./App.css";

import NavigationBar from "./Component/NavigationBar";
import LoginPage from "./Component/LoginPage";
import MessageInputField from "./Component/MessageInputField";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLogin: false
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updateLoginStatus = this.updateLoginStatus.bind(this);
  }

  updateUsername(value) {
    this.setState({
      username: value
    });
  }
  updateLoginStatus(status) {
    this.setState({
      isLogin: status
    });
  }

  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <div>
            <NavigationBar
              updateUsername={this.updateUsername}
              username={this.state.username}
              updateLoginStatus={this.updateLoginStatus}
              isLogin={this.state.isLogin}
            />
            <MessageInputField />
          </div>
        ) : (
          <div>
            <LoginPage
              updateUsername={this.updateUsername}
              updateLoginStatus={this.updateLoginStatus}
              username={this.state.username}
              isLogin={this.state.isLogin}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
