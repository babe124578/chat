import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../CSS/ChatRoom.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollIntoView from 'react-scroll-into-view'
import App from '../App';
import Message from './Message';

class ChatRoom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			typeText: '',
			name: this.props.username,
			isLogout: false,
			groupList: [],
			currentGroup: null,
			chats: [{
                username: "Trap",
                content: <p>message1</p>,
                img: "https://vignette.wikia.nocookie.net/youtubepoop/images/3/37/Gaben.png/revision/latest?cb=20150329133710",
            }, {
                username: "Glue",
                content: <p>message2</p>,
                img: "https://vignette.wikia.nocookie.net/youtubepoop/images/3/37/Gaben.png/revision/latest?cb=20150329133710",
            }, {
                username: "Kevin",
                content: <p>message3</p>,
                img: "https://vignette.wikia.nocookie.net/youtubepoop/images/3/37/Gaben.png/revision/latest?cb=20150329133710",
            }]
		};
		this.submitMessage = this.submitMessage.bind(this);
	}
	userInput(value) {
		this.setState({
			typeText: value
		});
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
		scrollBot();
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
						<button 
							onClick={e => {
								{/*add group to list here*/}
							}}
						>Create Group</button>
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
					
					<div className = "chat-container" id='scrollc'>
						<div className="chatbox-container">
							<ul className="chats" id='chatInput'>
								{
									chats.map((chat) => 
										<Message chat={chat} user={username} />
									)
								}
							</ul>
							<form className="input" onSubmit={(e) => this.submitMessage(e)}>
								<input 
									type="text" 
									ref="msg" 
									onChange={e => {
										this.userInput(e.target.value);
									}}/>
								<input 
									type="submit" 
									value="Submit"
									disabled={!this.state.typeText.trim().length > 0}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
        );
    }
}
function scrollBot() {
  var elmnt = document.getElementById("scrollc");
  elmnt.scrollIntoView();
}
export default ChatRoom;

