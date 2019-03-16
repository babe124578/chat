import React, { Component } from 'react';
import './App.css';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ChatRoom from './Component/ChatRoom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			isClick: false
		};
	}
	
	setName(value) {
		this.setState((state) => {
			return {username: value}
		});
	}
	
	render() {
		return (
			<div className='App-Container'>
				{
					this.state.isClick? 
					<ChatRoom username = {this.state.username} />
						:
					<div className='container'>
						<h1>Enter Your Name</h1>
						<br/>
						<input 
							type="text" 
							className="form-control" 
							placeholder="Enter name here ..." 
							id="nameField" 
							defaultValue={this.state.username}
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
										function() setName(this.value);
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
