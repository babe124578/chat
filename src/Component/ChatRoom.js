import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import '../CSS/ChatRoom.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ChatRoom extends Component {
    render() {
        return (
        <div>
            <div className="navbar">
                <p>
                    Group List   
                <button >
                    Leave Group 
                </button>
                </p>
                <p>This Room Name</p>
                <button>Create Group</button>
            <div>
                
            
            </div> 
            </div>

            <div className = "sideContainer">
                <NavLink to="/ChangeRoom" style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'black', textDecoration: 'none'}}>
                    <div className="chat-container">
                    <div className="message">
                    <div className="datetime">
                        <NavLink to="/JoinRoom">
                            <button type="submit">Join Group</button>
                        </NavLink>
                    </div>
                        <p>Group</p>
                    </div>
                    </div>
                </NavLink>
               
                <NavLink to="/ChangeRoom" style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'black', textDecoration: 'none'}}>
                    <div className="chat-container">
                    <div className="message">
                    <div className="datetime">
                        <NavLink to="/JoinRoom">
                            <button type="submit">Join Group</button>
                        </NavLink>
                    </div>
                        <p>Group2</p>
                    </div>
                    </div>
                </NavLink>

                <NavLink to="/ChangeRoom" style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'black', textDecoration: 'none'}}>
                    <div className="chat-container">
                    <div className="message">
                    <div className="datetime">
                        <NavLink to="/JoinRoom">
                            <button type="submit">Join Group</button>
                        </NavLink>
                    </div>
                        <p>Group3</p>
                    </div>
                    </div>
                </NavLink>

                <NavLink to="/ChangeRoom" style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'black', textDecoration: 'none'}}>
                    <div className="chat-container">
                    <div className="message">
                    <div className="datetime">
                        <NavLink to="/JoinRoom">
                            <button type="submit">Join Group</button>
                        </NavLink>
                    </div>
                        <p>Group4</p>
                    </div>
                    </div>
                </NavLink>
            </div>
        </div>
        );
    }
}

export default ChatRoom;

