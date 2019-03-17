import React, { Component } from "react";
import "../CSS/GroupList.css";

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempGroupName:'',
      groups: {},
      groupList: ["aa", "bb", "cc"]
    };
    this.onAddItem = this.onAddItem.bind(this);
    this.updateGroup = this.updateGroup.bind(this);
    this.createGroup = this.createGroup.bind(this);
  }

  onAddItem() {
    this.setState({
      groupList: [...this.state.groupList, this.state.tempGroupName]
    })
  };
  /*addGroups(group) {
    var timestamp = new Date().getTime();
    this.state.groups["group-" + timestamp] = group;
    this.setState({
      groups: this.state.groups
    });
  }*/
  createGroup(e) {
    e.preventDefault();
    var group = this.refs.groupName.value;
    if (typeof group === "string" && group.length > 0) {
      this.onAddItem();
      this.refs.groupForm.reset();
    }
  }
  getGroup() {
    for (let i = 0; i < this.state.groupList.length; i++) {
      return (
        <li className="list-group-item list-group-item-info" id="eachGroupItem">
          {this.state.groupList[i]}
        </li>
      );
    }
  }
  updateTemp(value) {
    this.setState({
      tempGroupName: value
    })
  }
  updateGroup(name){
    this.props.updateCurrentGroup(name)
  }
  render() {
    return (
      <div className="groupList-container">
        <ul className="list-group">
          

          {this.state.groupList.map(function(listvalue) {
            return (
              <li
                className="list-group-item list-group-item-info"
                id="eachGroupItem"
                onClick={e => {
                  console.log(listvalue);
                  this.updateGroup(listvalue);
                }}
              >
                {listvalue}
              </li>
            );
          },this)}
        </ul>

        <form
          className="form-inline"
          ref="groupForm"
          onSubmit={this.createGroup}
        >
          <div className="form-group">
            <label for="groupItem">
              <input
                type="text"
                id="groupItem"
                placeholder="e.x.aaa"
                ref="groupName"
                className="form-control form-control-sm"
                onChange={e => {
                  this.updateTemp(e.target.value);
                }}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            Add Group
          </button>
        </form>
      </div>
    );
  }
}

export default GroupList;
