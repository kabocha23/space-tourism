import React, { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  isNavExpanded: boolean;
  setIsNavExpanded: (expanded: boolean) => void;
}

const Navbar: FC<NavbarProps> = ({isNavExpanded, setIsNavExpanded}) => {

  const toggleIsNav = () => {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <div className="navbar-container">
      <ul className='non-collapsable-nav'>
        <li>
          <NavLink to="/space-tourism">
            <span className="nav-bold-nums">00</span> HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/space-tourism/destination">
            <span className="nav-bold-nums">01</span> DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink to="/space-tourism/crew">
            <span className="nav-bold-nums">02</span> CREW
          </NavLink>
        </li>
        <li>
          <NavLink to="/space-tourism/technology">
            <span className="nav-bold-nums">03</span> TECHNOLOGY
          </NavLink>
        </li>
      </ul>
      <div className='toggle-button'>
        <a
        title='col-nav-btn'
        onClick={toggleIsNav}
        >
          {isNavExpanded ? 'X' : '☰'}
        </a>
      </div>
      <div className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}>
        <ul className='collapsable-nav'>
          <li>
            <NavLink to="/space-tourism">
              <span className="nav-bold-nums">00</span> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/space-tourism/destination">
              <span className="nav-bold-nums">01</span> DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to="/space-tourism/crew">
              <span className="nav-bold-nums">02</span> CREW
            </NavLink>
          </li>
          <li>
            <NavLink to="/space-tourism/technology">
              <span className="nav-bold-nums">03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;