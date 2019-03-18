import React, { Component } from "react";
import "../CSS/GroupList.css";

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempGroupName: "",
      groups: {},
      groupList: ["aa", "bb", "cc"]
    };
    this.createGroup = this.createGroup.bind(this)
  }
  updateTempGroupName(value) {
    this.setState({
      tempGroupName: value
    })
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
      <div className="groupList-container">
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
                  this.updateTempGroupName(e.target.value);
                }}
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
                }}
              >
                {listvalue}
                <div className="ThreeButton">
                <button>Join</button>
                <button>Exit</button>
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
