import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import "../CSS/GroupList.css";

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: {},
      groupList: [],
      testIndex: 0,
      currentGroup: null,
      groupMessage: {
        "": []
      }
    };
    this.createGroup = this.createGroup.bind(this);
  }

  getInitialState() {
    return {
      groups: {
        "group-1": "group1",
        "group-2": "group2"
      }
    };
  }
  addGroups(group) {
    //create a unique key for each new group item
    var timestamp = new Date().getTime();
    // update the state object
    this.state.groups["group-" + timestamp] = group;
    // set the state
    this.setState({
      groups: this.state.groups
    });
  }
  createGroup(e) {
    e.preventDefault();
    //get the group object name from the form
    var group = this.refs.groupName.value;
    //if we have a group
    //call the addGroup method of the App component
    //to change the state of the group list by adding an new item
    if (typeof group === "string" && group.length > 0) {
      this.addGroups(group);
      //reset the form
      this.refs.groupForm.reset();
    }
  }

  render() {
    return (
      <div className="groupList-container">
        <ul className="list-group">
          {Object.keys(this.state.groups).map(
            function(key) {
              return (
                <li className="list-group-item list-group-item-info">
                  {this.state.groups[key]}
                </li>
              );
            }.bind(this)
          )}
        </ul>

        <form
          className="form-inline"
          ref="groupForm"
          onSubmit={this.createGroup}
        >
          <div className="form-group">
            <label for="groupItem">
              Group Name
              <input
                type="text"
                id="groupItem"
                placeholder="e.x.aaa"
                ref="groupName"
                className="form-control"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Add Group
          </button>
        </form>
      </div>
    );
  }
}

export default GroupList;
