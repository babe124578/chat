import React, { Component } from 'react';
import './App.css';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ChatRoom from './Component/ChatRoom';

class App extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			isClick: false
		};
	}
	
	render() {
		return (
			<div className='App-Container'>
				{
					this.state.isClick? 
					<ChatRoom />
						:
					<div className='container'>
						<h1>Enter Your Name</h1>
						<br/>
						<input 
							type="text" 
							className="form-control" 
							placeholder="Enter name here ..." 
							id="nameField" 
							required
							onChange={e => {
								this.setState({ username: this.value });
							}}
						></input>
						<br />
						<div>
							<Link to='/ChatRoom'>
								<button 
									className="btn btn-primary" 
									type="submit"
									onClick={e => {
										this.setState({ isClick: true });
										this.setState({ username: 'aaa'});
										console.log(this.state.isClick);
										console.log(this.state.username);
									}}
								>Enter</button>
							</Link>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default App;
