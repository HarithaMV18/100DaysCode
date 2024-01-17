import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ logo }) => {
  return (
    <nav className="navbar__list">
      <img src={logo} alt="logo" />
      <div className="small__line"></div>

      <ul className="nav__list">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>00 Home</li>
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>01 Destination</li>
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>02 Crew</li>
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>03 Technology</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
