import React, { Component } from "react";
import "../CSS/GroupList.css";

class GroupList extends Component {
  checkJoinStatus(value) {
    var groupList = this.props.groupList;
    var isJoin = this.props.isJoinGroupList;
    return isJoin[groupList.indexOf(value)] ? "leave" : "join";
  }
  componentDidMount() {
    this.props.passRefUpward(this.refs)
  }
  
  render() {
    return (
      <div className="groupList-container">
        <form
          className="form-inline"
          ref="groupForm"
          onSubmit={this.props.createGroup}
          id="formPanel"
        >
          <div className="form-group">
            <label className="addLabel" for="groupItem">
              <input
                type="text"
                id="groupItem"
                placeholder="Type New Group Name Here"
                ref="groupName"
                className="form-control"
              />
            </label>
          </div>
          <button
            type="submit"
            id="addButton"
            className="btn btn-primary btn-sm"
          >
            <i class="fas fa-plus" />
          </button>
        </form>
        <ul className="list-group">
          {this.props.groupList.map(function(listvalue) {
            return (
              <div>
                <li
                  className="list-group-item list-group-item-info"
                  id="eachGroupItem"
                  onClick={e => {
                    this.props.updateCurrentGroup(listvalue);
                  }}
                >
                  {listvalue}
                </li>
                <input
                  type="button"
                  className={this.checkJoinStatus(listvalue)}
                  ref={listvalue}
                  name={listvalue}
                  value={this.checkJoinStatus(listvalue)}
                  onClick={e => {
                    console.log(e.target);
                  }}
                />
              </div>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}

export default GroupList;
