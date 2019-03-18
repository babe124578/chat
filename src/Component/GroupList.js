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
                  this.props.updateCurrentGroup.bind(this,listvalue)
                }}
              >
                {listvalue}
              </li>
            );
          },this)}
        </ul>
      </div>
    );
  }
}

export default GroupList;
