import React, { useState } from 'react';
import "./Nav/Nav.css"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { SidebarData } from './SideMenuData';

function Nav(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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
    <>
    <div className="nav">
      <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="acrebound-logo">
            <Link to="/">
              <div>
            <img
              className="logo-img"
              src="https://i.imgur.com/51pfGRS.png"
              alt="Acrebound logo icon"
            />
              </div>
          </Link>
        </div>
          <div className="nav-options">
          {currentOwner && <NavLink className="hello-owner" to="/properties"> Hi, {currentOwner.first_name}</NavLink>}
          {currentOwner ? authenticatedOptions : unauthenticatedOptions}     
        
 </div>




        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
    </>
  );
}


export default Nav;