import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from '../App';

class chatRoom extends Component {
	render() {
		return (
		<div>
			<p>Test navigate</p>
		</div>
		/*{<Router>
                <switch>
                <Route path="/" exact render={() => {
                    return (
						<div className='container'>
						<p>test navigate</p>
						<NavLink to="../App">
							<button class="btn btn-dark" type="button">Enter</button>
						</NavLink>
						</div>
					);
				}}/>
				<Route exact path="../App" component={App} />
				</switch>
			</Router>
		}*/
		);
	}
}

export default chatRoom;
