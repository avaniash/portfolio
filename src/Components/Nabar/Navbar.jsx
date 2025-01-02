import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
        <ul className="nav-menu">
           <li>
              <NavLink to="/">Home</NavLink> {/* Links to the Home page */}
            </li>
            <li>
               <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
        </ul>
        <div className="nav-connect">Connect With me</div>
    </div>
  );
};

export default Navbar;