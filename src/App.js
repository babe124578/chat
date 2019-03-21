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
      isJoinGroupList: [true, false, true],
      groupList: ["Group1", "Group2", "Group3"],
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
    this.updateIsJoinGroupList = this.updateIsJoinGroupList.bind(this);
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

  //------------------GroupList---------------------
  updateCurrentGroup(value) {
    this.setState({
      currentGroup: value
    });
  }
  onAddChatItem() {
    let newRef = this.state.myRequestedRefs.groupName.value;
    this.setState({
      allChats: {...this.state.allChats, [newRef]: []}
    })
  }
  onAddItem() {
    this.setState({
      groupList: [
        ...this.state.groupList,
        this.state.myRequestedRefs.groupName.value
      ],
      isJoinGroupList: [...this.state.isJoinGroupList, true]
    });
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
    console.log(this.state.myRequestedRefs);
  }

  //------ north add ja -----//
  updateIsJoinGroupList(newList){
    this.setState({isJoinGroupList:newList});
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
        content: <p>{ReactDOM.findDOMNode(this.state.myRequestedRefsChat.msg).value}</p>,
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
    console.log(this.state.myRequestedRefs);
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
              isJoinGroupList={this.state.isJoinGroupList}
              groupList={this.state.groupList}
              onAddItem={this.onAddItem}
              passRefUpward={this.getRefsFromChild}
              updateIsJoinGroupList={this.updateIsJoinGroupList}
            />
            <ChatPanel
              username={this.state.username}
              currentGroup={this.state.currentGroup}
              isJoinGroupList={this.state.isJoinGroupList}
              groupList={this.state.groupList}
              allChats={this.state.allChats}
              typeText={this.state.typeText}
              submitMessage={this.submitMessage}
              userInput={this.userInput}
              passRefUpwardChat={this.getRefsFromChildChat}
            />
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
        ) : null}
      </div>
    );
  }
}

export default App;
