import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../CSS/ChatRoom.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from '../App';
import Message from './Message';

class ChatRoom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.username,
			isLogout: false,
			groupList: [],
			currentGroup: null,
			chats: [{
                username: "Trap",
                content: <p>3L</p>,
                img: "https://vignette.wikia.nocookie.net/youtubepoop/images/3/37/Gaben.png/revision/latest?cb=20150329133710",
            }, {
                username: "Glue",
                content: <p>nayok</p>,
                img: "https://vignette.wikia.nocookie.net/youtubepoop/images/3/37/Gaben.png/revision/latest?cb=20150329133710",
            }, {
                username: "Kevin",
                content: <p>pray me</p>,
                img: "https://vignette.wikia.nocookie.net/youtubepoop/images/3/37/Gaben.png/revision/latest?cb=20150329133710",
            }]
		};
		this.submitMessage = this.submitMessage.bind(this);
	}
	
	componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: this.state.name,
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "https://vignette.wikia.nocookie.net/youtubepoop/images/3/37/Gaben.png/revision/latest?cb=20150329133710",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }
	
    render() {
		const username = this.state.name;
        const { chats } = this.state;
	
        return (
			this.state.isLogout? 
			<App />
				:
			<div>
				<div className='ChatRoom-container'>
					<div className="navbar">
						<p>Welcome: {this.props.username}</p>
						<p>Group List</p>
						<p>This Room Name</p>
						<button>Create Group</button>
						<NavLink to='/'>
							<button
								onClick={e => {
									this.state.isLogout = true;
								}}
							>Logout</button>
						</NavLink>
					</div>

					<div className="group-container">
						<div className="message">
							<div className="datetime">
								<NavLink to="/JoinRoom">
									<button type="submit">Join Group</button>
								</NavLink>
							</div>
							<p>Group</p>
						</div>
					</div>
					
					<div className = "chat-container">
						<div className="chatbox-container">
							<ul className="chats" ref="chats">
								{
									chats.map((chat) => 
										<Message chat={chat} user={username} />
									)
								}
							</ul>
							<form className="input" onSubmit={(e) => this.submitMessage(e)}>
								<input type="text" ref="msg" />
								<input type="submit" value="Submit" />
							</form>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default ChatRoom;

