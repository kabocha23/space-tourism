import React, { FC } from "react";
import "./Technology.css";

interface TechnologyProps {
  technology: {
    name: string;
    images: { portrait: string; landscape: string; };
    description: string;
  }[];
}

const Technology: FC<TechnologyProps> = ({ technology }) => {
  return (
    <div className="technology-container">
      <div className="technology-blurb">      
        <p><span>03</span> SPACE LAUNCH 101</p>
        <div className="technology-nav">          
          <p>mini nav menu</p>
        </div>
        <div className="technology-description">
          <p>THE TERMINOLOGY...</p>
          <h1>technology[i].name</h1>
          <p>technology[i].description</p>
        </div>
      </div>
      <div className="technology-img">
        <img />
      </div>
    </div>
  );
};

export default Technology;
