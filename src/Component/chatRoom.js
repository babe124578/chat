
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
                <div class="datetime">
                <button type="submit">Join</button>
                </div>
                <p>Group1</p>
                </div>
                
                </div>

                <div class="chat-container">
                <div class="message">
                <div class="datetime">
                <button type="submit">Join</button>
                    
                </div>
                <p>Group2</p>
                </div>
                </div>

            </div>
        );
    }
}

export default chatRoom;

