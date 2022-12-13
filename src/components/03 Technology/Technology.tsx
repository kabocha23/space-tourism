import React, { FC } from "react";
import "./Technology.css";

interface TechnologyProps {
  technology: {
    name: string;
    images: { portrait: string; landscape: string; };
    description: string;
  }[];
  tech: number;
  setTech: (techIdx: number) => void;
}

const Technology: FC<TechnologyProps> = ({ 
  technology, 
  tech, 
  setTech 
}) => {

  const changeTechnology = (techIdx: number): void => {
    setTech(techIdx);
  };

  return (
    <div className="technology-container">
      <p className="technology-heading heading-5"><span className="grey">03</span> SPACE LAUNCH 101</p>
      <div className="technology-container-sub">
        <div className="technology-blurb">    
            <div className="technology-flex">
              <div className="technology-nav subheading-2">          
                <button onClick={() => changeTechnology(0)} className={tech===0?"techActiveOn":"techActiveOff"}>1</button>
                <button onClick={() => changeTechnology(1)} className={tech===1?"techActiveOn":"techActiveOff"}>2</button>
                <button onClick={() => changeTechnology(2)} className={tech===2?"techActiveOn":"techActiveOff"}>3</button>
              </div>
              <div className="technology-description">
                <p className="technology-role subheading-1 lavender">THE TERMINOLOGY...</p>
                <p className="technology-name heading-3">{technology[`${tech}`].name.toUpperCase()}</p>
                <p className="technology-desc body-text lavender">{technology[`${tech}`].description}</p>
              </div>            
            </div>
          </div>

          <div className="technology-img">
            <img 
              src={require(`../../${technology[`${tech}`].images.portrait}.jpg`)}
              alt={technology[`${tech}`].name}
            />
          </div>
        </div>
    </div>
  );
};

export default Technology;
