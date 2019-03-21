import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

import NavigationBar from "./Component/NavigationBar";
import LoginPage from "./Component/LoginPage";
import GroupList from "./Component/GroupList";
import ChatPanel from "./Component/ChatPanel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeText: "",
      currentPage: "Login",
      username: "",
      currentGroup: "Not in group.",
      mockJoinForEachUser: {
        This: [false, true, true],
        glue: [true, false, false],
        tun: [true, true, true],
        dad: [false, false, false]
      },
      allChats: {
        Group1: [
          {
            username: "This",
            content: "This",
            timeStamp: "1:23"
          },
          {
            username: "is",
            content: "is",
            timeStamp: "2:34"
          },
          {
            username: "Group1",
            content: "group1",
            timeStamp: "3:45"
          }
        ],
        Group2: [
          {
            username: "This",
            content: "This",
            timeStamp: "1:23"
          },
          {
            username: "is",
            content: "is",
            timeStamp: "2:34"
          },
          {
            username: "Group2",
            content: "group2",
            timeStamp: "3:45"
          }
        ],
        Group3: [
          {
            username: "This",
            content: "This",
            timeStamp: "1:23"
          },
          {
            username: "is",
            content: "is",
            timeStamp: "2:34"
          },
          {
            username: "Group3",
            content: "Group3",
            timeStamp: "3:45"
          }
        ]
      }
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.updateCurrentGroup = this.updateCurrentGroup.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.getRefsFromChild = this.getRefsFromChild.bind(this);
    this.getRefsFromChildChat = this.getRefsFromChildChat.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.userInput = this.userInput.bind(this);
    this.updateMockJoin = this.updateMockJoin.bind(this);
    this.updateMockNewUser = this.updateMockNewUser.bind(this);
  }
  //--------------------Login-----------------------
  updateUsername(value) {
    this.setState({
      username: value
    });
  }
  updateCurrentPage(status) {
    this.setState({
      currentPage: status
    });
  }
  updateMockNewUser(name) {
    if (!(name in this.state.mockJoinForEachUser)) {
      this.setState({
        mockJoinForEachUser: {
          ...this.state.mockJoinForEachUser,
          [name]: Array(Object.keys(this.state.allChats).length).fill(false)
        }
      });
    }
  }

  //------------------GroupList---------------------
  updateCurrentGroup(value) {
    this.setState({
      currentGroup: value
    });
  }
  onAddChatItem() {
    var newRef = this.state.myRequestedRefs.groupName.value;
    console.log(this.state.myRequestedRefs.groupName)
    console.log([newRef]);
    this.setState({
      allChats: { ...this.state.allChats, [newRef]: [] }
    });
  }
  onAddItem() {
    let tmp = Object.assign({}, this.state.mockJoinForEachUser);
    for (var i in this.state.mockJoinForEachUser) {
      tmp[i] = this.state.mockJoinForEachUser[i].concat([
        i === this.state.username ? true : false
      ]);
      console.log(i)
      console.log(this.state.username)
      console.log(i===this.state.username)
      this.setState({
        mockJoinForEachUser: tmp
      });
    }
    this.onAddChatItem();
    this.state.myRequestedRefs.groupForm.reset();
  }
  createGroup(e) {
    e.preventDefault();
    var group = this.state.myRequestedRefs.groupName.value;
    if (typeof group === "string" && group.length > 0) {
      this.onAddItem();
    }
  }
  getRefsFromChild(childRef) {
    this.setState({
      myRequestedRefs: childRef
    });
  }

  //------ north add ja -----//
  updateMockJoin(newList) {
    for (var eachUser in this.state.mockJoinForEachUser) {
      if (eachUser === this.state.username) {
        var test = this.state.mockJoinForEachUser.eachUser;
        this.setState({ [test]: newList });
      }
    }
  }

  //---------------------ChatPanel------------------------
  submitMessage(e) {
    e.preventDefault();
    let tmp = Object.assign({}, this.state.allChats); //creating copy of object
    tmp[this.state.currentGroup] = this.state.allChats[
      this.state.currentGroup
    ].concat([
      {
        username: this.state.username,
        content: (
          <p>
            {ReactDOM.findDOMNode(this.state.myRequestedRefsChat.msg).value}
          </p>
        ),
        timeStamp: "23:59"
      }
    ]);
    this.setState({
      allChats: tmp
    });
    ReactDOM.findDOMNode(this.state.myRequestedRefsChat.msg).value = "";
    this.userInput("");
  }
  userInput(value) {
    this.setState({
      typeText: value
    });
  }
  getRefsFromChildChat(chatRef) {
    this.setState({
      myRequestedRefsChat: chatRef
    });
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
              createGroup={this.createGroup}
              groupList={this.state.groupList}
              onAddItem={this.onAddItem}
              passRefUpward={this.getRefsFromChild}
              updateMockJoin={this.updateMockJoin}
              allChats={this.state.allChats}
              mockJoinForEachUser={this.state.mockJoinForEachUser}
            />
            <ChatPanel
              username={this.state.username}
              currentGroup={this.state.currentGroup}
              groupList={this.state.groupList}
              allChats={this.state.allChats}
              typeText={this.state.typeText}
              submitMessage={this.submitMessage}
              userInput={this.userInput}
              passRefUpwardChat={this.getRefsFromChildChat}
              mockJoinForEachUser={this.state.mockJoinForEachUser}
            />
          </div>
        ) : this.state.currentPage === "Login" ? (
          <div>
            <LoginPage
              updateUsername={this.updateUsername}
              updateCurrentPage={this.updateCurrentPage}
              username={this.state.username}
              currentPage={this.state.currentPage}
              mockJoinForEachUser={this.state.mockJoinForEachUser}
              updateMockNewUser={this.updateMockNewUser}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
