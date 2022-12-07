import React, { FC } from "react";
import "./Crew.css";

interface CrewProps {
  crew: {
    name: string;
    images: { png: string; webp: string; };
    role: string;
    bio: string;
  }[];
  crewMember: number;
  setCrewMember: (crewIdx: number) => void;
}

const Crew: FC<CrewProps> = ({ 
  crew, 
  crewMember, 
  setCrewMember 
}) => {

  const changeCrewMember = (crewIdx: number): void => {
    setCrewMember(crewIdx);
  };

  return (
    <div className="crew-container">
      <div className="crew-blurb">
        <div className="crew-blurb-sub">
          <p className="crew-heading heading-5"><span className="grey">02</span> MEET YOUR CREW</p>
          <div className="crew-description">
            <p className="crew-role heading-4 grey">{crew[`${crewMember}`].role.toUpperCase()}</p>
            <p className="crew-name heading-3">{crew[`${crewMember}`].name.toUpperCase()}</p>
            <p className="crew-bio body-text lavender">{crew[`${crewMember}`].bio}</p>
          </div>
          <div className="crew-nav subheading-2">
                <button onClick={() => changeCrewMember(0)} className={crewMember===0?"crewActiveOn":"crewActiveOff"}></button>
                <button onClick={() => changeCrewMember(1)} className={crewMember===1?"crewActiveOn":"crewActiveOff"}></button>
                <button onClick={() => changeCrewMember(2)} className={crewMember===2?"crewActiveOn":"crewActiveOff"}></button>
                <button onClick={() => changeCrewMember(3)} className={crewMember===3?"crewActiveOn":"crewActiveOff"}></button>
          </div>
        </div>
      </div>
      <div className="crew-img">
        <img 
          src={require(`../../${crew[`${crewMember}`].images.png}.png`)}
          alt={crew[`${crewMember}`].name}
        />
      </div>
    </div>
  );
};

export default Crew;
