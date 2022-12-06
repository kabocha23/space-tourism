import React, { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: FC = () => {

  return (
    <div className="navbar-container">
      <ul>
        <li>
          <NavLink to="/">
            <span className="nav-bold-nums">00</span> HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination">
            <span className="nav-bold-nums">01</span> DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew">
            <span className="nav-bold-nums">02</span> CREW
          </NavLink>
        </li>
        <li>
          <NavLink to="/technology">
            <span className="nav-bold-nums">03</span> TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;