import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'


function Nav(props) {
  const { currentOwner, handleLogout } = props;

const authenticatedOptions = (
  <>
      <NavLink className="link" to="/properties/new">Add Properties</NavLink>
      <button className="logout" onClick={handleLogout}>Logout</button>
  </>
)
const unauthenticatedOptions = (
  <>
      <NavLink className="link" to="/login">Login</NavLink>
      <NavLink className="link" to="/register">Register</NavLink>
  </>
)

  return (
    <div className="nav">
        <div className="acrebound-logo">
          <Link to="/">
            <img
              className="logo"
              src="https://github.com/tiffanybibby/acrebound/blob/main/assets/logoicon.png?raw=true"
              alt="Acrebound logo icon"
            />
            <p className="app-name">AcreBound</p>
          </Link>
        </div>
          <div className="nav-options">
          {currentOwner && <NavLink className="hello-owner" to="/properties"> Hi, {currentOwner.first_name}</NavLink>}
          {currentOwner ? authenticatedOptions : unauthenticatedOptions}    
        
          </div>
        
      </div>
  );
}

export default Nav;