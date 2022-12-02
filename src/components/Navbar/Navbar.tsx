import React, { FC } from "react";
import "./Navbar.css";


const Navbar: FC = () => {

  return (
    <div className="navbar-container">
      <ul>
        <li>
          <a href="http://localhost:3000/">
            <span className="nav-bold-nums">00</span> HOME
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/destination">
            <span className="nav-bold-nums">01</span> DESTINATION
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/crew">
            <span className="nav-bold-nums">02</span> CREW
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/technology">
            <span className="nav-bold-nums">03</span> TECHNOLOGY
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;