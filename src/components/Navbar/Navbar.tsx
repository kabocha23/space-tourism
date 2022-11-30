import React, { FC, useEffect } from "react";
import AppRouter from "./AppRouter"
import "./Navbar.css";

interface Props {
  destinations: { 
    name: string; 
    images: { png: string; webp: string; }; 
    description: string; 
    distance: string; 
    travel: string; 
  }[]; 
  crew: { 
    name: string; 
    images: { png: string; webp: string; }; 
    role: string; bio: string; 
  }[]; 
  technology: { 
    name: string; 
    images: { portrait: string; landscape: string; }; 
    description: string;
  }[];
};

const Navbar: FC<Props> = ({ destinations, crew, technology }) => {

  useEffect(() => {
    console.log(destinations, crew, technology)
  })
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