import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ChatRoom from './Component/ChatRoom';

class App extends Component {
	render() {
		return (
			<Router>
                <switch>
                <Route path="/" exact render={() => {
                    return (
						<div className='name'>
							<div className='container'>
								<h1>Enter Your Name</h1>
								<br/>
								<form class="form-group">
									<input type="text" class="form-control" placeholder="Enter name here ..." id="nameField" required validationmessage="Please enter your name in this field."></input>
									<br/><br/><br/>
									<Route>
									<div>
										<NavLink to="/ChatRoom">
											<button class="btn btn-primary" type="submit">Enter</button>
										</NavLink>
										
									</div>
									</Route>
								</form>
							</div>
						</div>
						);
					}}/>
				<Route exact path="/ChatRoom" component={ChatRoom} />
				</switch>
			</Router>
		);
	}
}

export default App;
