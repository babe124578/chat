
import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import '../CSS/ChatRoom.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class chatRoom extends Component {
    render() {
        return (
            <div class = "sideContainer">
                <NavLink to="/ChangeRoom" style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'black', textDecoration: 'none'}}>
                    <div class="chat-container">
                    <div class="message">
                    <div class="datetime">
                        <NavLink to="/JoinRoom">
                            <button type="submit">Join</button>
                        </NavLink>
                    </div>
                        <p>Group1</p>
                    </div>
                    </div>
                </NavLink>
               
                <NavLink to="/ChangeRoom" style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'black', textDecoration: 'none'}}>
                    <div class="chat-container">
                    <div class="message">
                    <div class="datetime">
                        <NavLink to="/JoinRoom">
                            <button type="submit">Join</button>
                        </NavLink>
                    </div>
                        <p>Group2</p>
                    </div>
                    </div>
                </NavLink>
               

            </div>
        );
    }
}

export default chatRoom;

