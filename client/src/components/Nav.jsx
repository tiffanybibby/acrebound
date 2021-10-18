import React, { useState } from 'react';
import "./Nav.css"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { SidebarData } from './SideMenuData';

export default function Nav(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { currentOwner, handleLogout } = props;

  const authenticatedOptions = (
    <>

      <button className="logout" onClick={handleLogout}>Logout</button>
    </>
  )
  const unauthenticatedOptions = (
    <>
      <NavLink className="nav-link" to="/login">Login</NavLink>
      <br />
      <NavLink className="nav-link" to="/register">Register</NavLink>
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
            <br />
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