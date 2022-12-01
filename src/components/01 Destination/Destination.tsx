import React, { FC } from "react";
import "./Destination.css";

interface DestinationProps {
  destinations: { 
    name: string; 
    images: { png: string; webp: string; }; 
    description: string; 
    distance: string; 
    travel: string; 
  }[]; 
}

const Destination: FC<DestinationProps> = ({ destinations }) => {

  return (
    <div className="destination-container">
      <div className="destination-img">      
        <p><span>01</span> PICK YOUR DESTINATION</p>
        <img />
      </div>
      <div className="destination-blurb">
        <div className="destination-blurb-top">
          <p>mini nav menu</p>
          <h1>{destinations[0].name}</h1>
          <p>{destinations[0].description}</p>          
        </div>

        <hr></hr>

        <div className="destination-blurb-bottom">
          <div className="avg-distance">
            <p>AVG. DISTANCE</p>
            <p>{destinations[0].distance}</p>
          </div>
          <div className="est-travel-time">
            <p>EST. TRAVEL TIME</p>
            <p>{destinations[0].travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
