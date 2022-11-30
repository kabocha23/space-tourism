import React from "react";
import AppRouter from "./AppRouter"
import "./Navbar.css";


const Navbar = () => {
  return (
    <div>
      <p>Navbar Component</p>
      <ul>
        <li><a href="http://localhost:3000/">00 Home</a></li>
        <li><a href="http://localhost:3000/destination">01 Destination</a></li>
        <li><a href="http://localhost:3000/crew">02 Crew</a></li>
        <li><a href="http://localhost:3000/technology">03 Technology</a></li>
      </ul>
      <AppRouter />
    </div>
  );
};

export default Navbar;