import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import '../CSS/ChatRoom.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from '../App';

class ChatRoom extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			isLogout: false,
			groupList: [],
			currentGroup: null
		};
	}
    render() {
        return (
			<div>
				{
				this.state.isLogout? 
				<App />
					:
				<div>
					<div className="navbar">
				<p>Welcome: {this.props.username}</p>
						<p>
							Group List   
						
						</p>
						<button >
							Leave Group 
						</button>
						<p>This Room Name</p>
						<button>Create Group</button>
						<NavLink to='/'>
							<button
								onClick={e => {
									this.setState({ isLogout: true });
									this.setState({ username: ''});
									console.log(this.state.isClick);
									console.log(this.state.username);
								}}
							>Logout</button>
						</NavLink>
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
				
				}
			</div>
        );
    }
}

export default ChatRoom;

