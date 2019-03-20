import React, { Component } from "react";
import "../CSS/GroupList.css";

class GroupList extends Component {
  checkJoinStatus(value, leave, join) {
    var groupList = Object.keys(this.props.allChats);
    var data = this.props.mockJoinForEachUser;
    var isJoin;
    for (var keysd in data) {
      if (keysd === this.props.username) {
        isJoin = data[keysd];
      }
    }
    return isJoin[groupList.indexOf(value)] ? leave : join;
  }
  componentDidMount() {
    this.props.passRefUpward(this.refs);
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
          {Object.keys(this.props.allChats).map(function(listvalue) {
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
                  {this.checkJoinStatus(listvalue, " (Joined)", " (Not-Join)")}
                </li>
                <button
                  type="submit"
                  className={this.checkJoinStatus(listvalue, "leave", "join")}
                  value={
                    this.checkJoinStatus(listvalue, "leave", "join") +
                    "_" +
                    listvalue
                  }
                  onClick={e => {
                    var name = this.props.username;
                    var tmp = e.target.value.split("_");
                    var data = this.props.mockJoinForEachUser;
                    for(var key in data) {
                      if(key === name) {
                          var value = data[key];
                      }
                  }
                    var tmp2 = value;
                    for (
                      var i = 0;
                      i < Object.keys(this.props.allChats).length;
                      i++
                    ) {
                      if (Object.keys(this.props.allChats)[i] === tmp[1]) {
                        if (tmp[0] === "leave") {
                          tmp2[i] = false;
                        } else {
                          tmp2[i] = true;
                        }
                        this.props.updateMockJoin(tmp2);
                        break;
                      }
                    }
                  }}
                >
                  {this.checkJoinStatus(listvalue, "leave", "join")}
                </button>
              </div>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}

export default GroupList;
