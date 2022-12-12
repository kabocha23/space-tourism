import React, { FC, useEffect } from "react";
import "./Destination.css";

interface DestinationProps {
  destinations: { 
    name: string; 
    images: { png: string; webp: string; }; 
    description: string; 
    distance: string; 
    travel: string; 
  }[];
  planet: number;
  setPlanet: (planetIdx: number) => void;
}

const Destination: FC<DestinationProps> = ({ 
  destinations, 
  planet, 
  setPlanet 
}) => {

  const changePlanet = (planetIdx: number): void => {
    setPlanet(planetIdx);
  };


  return (
    <div className="destination-container">

      <div className="destination-img">      
        <p className="heading-5"><span className="grey">01</span> PICK YOUR DESTINATION</p>
        <img 
          src={require(`../../${destinations[`${planet}`].images.png}.png`)}
          alt={destinations[`${planet}`].name}
          />
      </div>

      <div className="destination-blurb">
        <div className="destination-blurb-sub">
          <div className="destination-blurb-top">
            <div className="destination-nav subheading-2">
              <p onClick={() => changePlanet(0)} className={planet===0?"planetActiveOn":"planetActiveOff"}>MOON</p>
              <p onClick={() => changePlanet(1)} className={planet===1?"planetActiveOn":"planetActiveOff"}>MARS</p>
              <p onClick={() => changePlanet(2)} className={planet===2?"planetActiveOn":"planetActiveOff"}>EUROPA</p>
              <p onClick={() => changePlanet(3)} className={planet===3?"planetActiveOn":"planetActiveOff"}>TITAN</p>
            </div>
            <p className="destination-name heading-2">{destinations[`${planet}`].name.toUpperCase()}</p>
            <p className="body-text lavender">{destinations[`${planet}`].description}</p>          
          </div>

          <hr></hr>

          <div className="destination-blurb-bottom">
            <div className="avg-distance">
              <p className="subheading-2 lavender">AVG. DISTANCE</p>
              <p className="heading-4 white">{destinations[`${planet}`].distance.toUpperCase()}</p>
            </div>
            <div className="est-travel-time">
              <p className="subheading-2 lavender">EST. TRAVEL TIME</p>
              <p className="heading-4 white">{destinations[`${planet}`].travel.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
