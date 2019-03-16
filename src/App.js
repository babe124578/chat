import React, { Component } from 'react';
import './App.css';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ChatRoom from './Component/ChatRoom';
import ChatBox from './Component/ChatBox';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			isLogin: false
		};
	}
	
	userInput(value) {
		this.setState({
			username: value
		});
	}
	setLogin(status) {
		this.state.isLogin = true
	}
	
	render() {
		return (
			<div>
				{
					this.state.isLogin? 
					<div>
					<ChatRoom username = {this.state.username} isLogin = {this.state.isLogin}/>
					</div>
						:
					<div className='App-Page'>
						<div className='Field-Container'>
							<h1 className='enterText'>Enter Your Name</h1>
							<br/>
							<input 
								type="text" 
								className="form-control" 
								placeholder="Enter name here ..." 
								id="nameField" 
								value={this.state.username}
								onChange={e => {
									this.userInput(e.target.value);
								}}
								required minLength={1} maxLength={15}
							></input>
							{
								this.state.username.trim().length > 0? <br />:
								<pre className='blankAlert'>    Please fill out this field.</pre>
							}
							<div>
								<NavLink to='/ChatRoom'>
									<button 
										disabled={!this.state.username.trim().length > 0}
										className="btn btn-primary" 
										type="submit"
										onClick={e => {
											this.setState((state) => {
												this.setLogin(true)
											});
										}}
									>Enter</button>
								</NavLink>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default App;
