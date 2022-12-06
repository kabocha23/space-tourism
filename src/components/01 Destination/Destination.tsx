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
        <p className="heading-5"><span>01</span> PICK YOUR DESTINATION</p>
        <img src={require(`../../${destinations[0].images.png}.png`)}/>
      </div>

      <div className="destination-blurb">
        <div className="destination-blurb-sub">
          <div className="destination-blurb-top">
            <div className="destination-nav subheading-2">
              <p>MOON</p>
              <p>MARS</p>
              <p>EUROPA</p>
              <p>TITAN</p>
            </div>
            <p className="heading-2">{destinations[0].name.toUpperCase()}</p>
            <p className="body-text lavender">{destinations[0].description}</p>          
          </div>

          <hr></hr>

          <div className="destination-blurb-bottom">
            <div className="avg-distance">
              <p className="subheading-2 lavender">AVG. DISTANCE</p>
              <p className="heading-4 white">{destinations[0].distance.toUpperCase()}</p>
            </div>
            <div className="est-travel-time">
              <p className="subheading-2 lavender">EST. TRAVEL TIME</p>
              <p className="heading-4 white">{destinations[0].travel.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
