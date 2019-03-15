
import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import './ChatRoom.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App';

class chatRoom extends Component {
    render() {
        return (
        <div>
            <div id="sidebar">
                <div class = "toggle-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <p>Group</p>
                    <p>Group</p>
                    <p>Group</p>
                </ul>
            </div>

            <div id="chatside">
            <NavLink to="/CreateRoom">
                <button class="btn btn-primary" type="create">Create</button>
            </NavLink>
            
            <button class="btn btn-primary" type="join">Join</button>
            


            <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                <input type="text" ref="msg" />
                <input type="submit" value="Submit" />
            </form>
            
            </div>

      


            

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

