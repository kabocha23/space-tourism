import React from "react";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="destination-container">
      <div className="destination-img">      
        <p><span>01</span> PICK YOUR DESTINATION</p>
        <img />
      </div>
      <div className="destination-blurb">
        <div className="destination-blurb-top">
          <p>mini nav menu</p>
          <h1>destinations[i].name</h1>
          <p>destinations[i].description</p>          
        </div>

        <hr></hr>

        <div className="destination-blurb-bottom">
          <div className="avg-distance">
            <p>AVG. DISTANCE</p>
            <p>destinations[i].distance</p>
          </div>
          <div className="est-travel-time">
            <p>EST. TRAVEL TIME</p>
            <p>destinations[i].travel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
