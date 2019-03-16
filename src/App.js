import React, { Component } from 'react';
import './App.css';
import { NavLink } from "react-router-dom";

import ChatRoom from './Component/ChatRoom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			isClick: false
		};
	}
	
	userInput(value) {
		this.setState({
			username: value
		});
	}
	userClick() {
		this.setState({
			isClick: true
		});
	}
	
	render() {
		return (
			<div className='App-Page'>
				{
					this.state.isClick? 
					<ChatRoom username = {this.state.username} />
						:
					<div className='Field-Container'>
						<h1 className='enterText'>Enter Your Name</h1>
						<br/>
						<input 
							type="text" 
							className="form-control" 
							placeholder="Enter name here ..." 
							id="nameField" 
							value={this.state.username}
							onChange={e => this.userInput(e.target.value)}
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
											return {
												isClick: true
											}
									});
									}}
								>Enter</button>
							</NavLink>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default App;
