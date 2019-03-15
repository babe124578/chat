
import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App';

class chatRoom extends Component {
    render() {
        return (
        <div>
            <p></p>
            <NavLink to="/CreateRoom">
                <button class="btn btn-primary" type="create">Create</button>
            </NavLink>
            
            <button class="btn btn-primary" type="join">Join</button>
            <table>  
                   <tr><th>Group list</th></tr>  
                    <tr><td>Group1</td></tr>  
                    <tr><td>Group2</td></tr>  
                    <tr><td>Group2</td></tr>  
                    <tr><td>Group4</td></tr>  
            </table>  


            <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                <input type="text" ref="msg" />
                <input type="submit" value="Submit" />
            </form>

            


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

