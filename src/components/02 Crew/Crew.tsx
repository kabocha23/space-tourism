import React from "react";
import "./Crew.css";

const Crew = () => {
  return (
    <div className="crew-container">
      <div className="crew-blurb">      
        <p><span>02</span> MEET YOUR CREW</p>
        <div className="crew-description">
          <h1>crew[i].role</h1>
          <p>crew[i].name</p>
          <p>crew[i].bio</p>
        </div>
        <div className="crew-nav">          
          <p>mini nav menu</p>
        </div>
      </div>
      <div className="crew-img">
        <img />
      </div>
    </div>
  );
};

export default Crew;
