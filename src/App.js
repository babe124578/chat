import React, { Component } from "react";
import "./App.css";

import NavigationBar from "./Component/NavigationBar";
import LoginPage from "./Component/LoginPage";
import GroupList from "./Component/GroupList";
import ChatPanel from "./Component/ChatPanel";
import CreateRoomPage from "./Component/CreateRoomPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Login",
      username: "",
      currentGroup: "",
      isClickCreateGroup: "",
      tempGroupName: "",
      groupList: ["aa", "bb", "cc"]
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.updateCurrentGroup = this.updateCurrentGroup.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.updateTemporary = this.updateTemporary.bind(this);
  }

  updateUsername(value) {
    this.setState({
      username: value
    });
  }
  updateTemporary(value) {
    this.setState({
      tempGroupName: value
    });
  }
  updateCurrentPage(status) {
    this.setState({
      currentPage: status
    });
  }
  updateCurrentGroup(value) {
    this.setState({
      currentGroup: value
    });
  }
  onAddItem() {
    this.setState({
      groupList: [...this.state.groupList, this.state.tempGroupName]
    });
  }
  createGroup(e) {
    e.preventDefault();
    var group = this.refs.groupName.value;
    if (typeof group === "string" && group.length > 0) {
      this.onAddItem();
      this.refs.groupForm.reset();
    }
  }

  render() {
    return (
      <div>
        {this.state.currentPage === "Chat" ? (
          <div>
            <NavigationBar
              updateUsername={this.updateUsername}
              username={this.state.username}
              currentGroup={this.state.currentGroup}
              updateCurrentPage={this.updateCurrentPage}
              currentPage={this.state.currentPage}
            />
            <GroupList
              updateCurrentGroup={this.updateCurrentGroup}
              currentGroup={this.state.currentGroup}
              username={this.state.username}
              groupList={this.state.GroupList}
              createGroup={this.state.createGroup}
            />
            <ChatPanel username={this.state.username} />
          </div>
        ) : this.state.currentPage === "Login" ? (
          <div>
            <LoginPage
              updateUsername={this.updateUsername}
              updateCurrentPage={this.updateCurrentPage}
              username={this.state.username}
              currentPage={this.state.currentPage}
            />
          </div>
        ) : this.state.currentPage === "Create" ? (
          <div>
            <CreateRoomPage
              updateUsername={this.updateUsername}
              updateCurrentPage={this.updateCurrentPage}
              username={this.state.username}
              currentPage={this.state.currentPage}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
