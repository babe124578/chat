import React from 'react';
import ReactDOM from 'react-dom';
import '../CSS/ChatBox.css';

import Message from './Message.js';

class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			name: this.props.username,
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
			<div className="chat-container">
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
        );
    }
}

export default ChatBox;