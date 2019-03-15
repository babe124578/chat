
import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import './ChatRoom.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class chatRoom extends Component {
    render() {
        return (
            <div class = "container">
                <div class="chat-container">
                <div class="message">
                <img class="avatar" src="https://placeimg.com/50/50/people?1"></img>
                <div class="datetime">
                    23/03/2016 20:40
                </div>
                <p>A message text</p>
                </div>
                </div>

                <div class="chat-container">
                <div class="message">
                <img class="avatar" src="https://placeimg.com/50/50/people?1"></img>
                <div class="datetime">
                    23/03/2016 20:40
                </div>
                <p>A message text</p>
                </div>
                </div>

                <div class="chat-container">
                <div class="message">
                <img class="avatar" src="https://placeimg.com/50/50/people?1"></img>
                <div class="datetime">
                    23/03/2016 20:40
                </div>
                <p>A message text</p>
                </div>
                </div>

                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                <input type="text" ref="msg" />
                <input type="submit" value="Submit" />
            </form>
            </div>

        
        );
    }
}

export default chatRoom;

