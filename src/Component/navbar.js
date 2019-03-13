import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "grey", padding: "0px" }}>
          <NavLink className="homeButton" exact to="/" activeClassName="active" style={{ textDecoration: 'none' }}><i class="fas fa-home"></i>Home</NavLink>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //<ul className="navbar-nav ml-auto juiheader" >
              //<li><NavLink className="juiheaderbutton" to="/login/" activeClassName="active" style={{ textDecoration: 'none' }}><i class="fas fa-sign-in-alt"></i> Login</NavLink></li>
              //<li><NavLink className="juiheaderbutton" to="/signup/" activeClassName="active" style={{ textDecoration: 'none' }}><i class="fas fa-user-plus"></i> Sign Up</NavLink></li>
            //</ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;