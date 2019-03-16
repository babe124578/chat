import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import '../CSS/ChatRoom.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from '../App';

class ChatRoom extends Component {
	constructor() {
		super();
		this.state = {
			isLogout: false,
			groupList: [],
			currentGroup: null
		};
	}
    render() {
        return (
			this.state.isLogout? 
			<App />
				:
			<div className='ChatRoom-State'>
				<div className="navbar">
					<p>Welcome: {this.props.username}</p>
					<p>Group List</p>
					<p>This Room Name</p>
					<button>Create Group</button>
					<NavLink to='/'>
						<button
							onClick={e => {
								this.setState({ isLogout: true });
								console.log(this.props.username);
							}}
						>Logout</button>
					</NavLink>
				</div>

				<div className = "sideContainer">
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
            	</div>
				<button >Leave Group</button>
			</div>
        );
    }
}

export default ChatRoom;

