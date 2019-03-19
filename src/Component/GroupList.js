import React, { Component } from "react";
import "../CSS/GroupList.css";

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: ["Group1", "Group2", "Group3"]
    };
    this.createGroup = this.createGroup.bind(this)
  }
  onAddItem() {
    this.setState({
      groupList: [...this.state.groupList, this.refs.groupName.value]
    });
    this.refs.groupForm.reset();
  }
  createGroup(e) {
    e.preventDefault();
    var group = this.refs.groupName.value;
    if (typeof group === "string" && group.length > 0) {
      this.onAddItem();
      
    }
  }
  render() {
    return (
      <div className="groupList-container">
        <form
          className="form-inline"
          ref="groupForm"
          onSubmit={this.createGroup}
          key="abcd"
        >
          <div className="form-group">
            <label className="addLabel" for="groupItem">
              <input
                type="text"
                id="groupItem"
                placeholder="Type New Group Name Here"
                ref="groupName"
                className="inputLeft"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            Add Group
          </button>
        </form>
        <ul className="list-group">
          {this.state.groupList.map(function(listvalue) {
            return (
              <li
                className="list-group-item list-group-item-info"
                id="eachGroupItem"
                onClick={e => {
                  console.log(listvalue);
                  this.props.updateCurrentGroup(listvalue);
                }}>
                {listvalue}
                <div className="ThreeButton">
                <button>Join</button>
                <button>Leave</button>
              </div>
              </li>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}

export default GroupList;
