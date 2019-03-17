import React, { Component } from "react";
import "./App.css";

import NavigationBar from "./Component/NavigationBar";
import LoginPage from "./Component/LoginPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLogin: false
    };
    this.updateInput = this.updateInput.bind(this);
    this.updateLoginStatus = this.updateLoginStatus.bind(this);
  }

  updateInput(value) {
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
              updateInput={this.updateInput}
              username={this.state.username}
              updateLoginStatus={this.updateLoginStatus}
              isLogin={this.state.isLogin}
            />
          </div>
        ) : (
          <div>
            <LoginPage
              updateInput={this.updateInput}
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
