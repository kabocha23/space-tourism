import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../00 Home/Home';
import Destination from '../01 Destination/Destination';
import Crew from '../02 Crew/Crew';
import Technology from '../03 Technology/Technology';

interface Props {
  home: {
    intro: string;
    title: string;
    description: string;
  };
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
    role: string; 
    bio: string; 
  }[]; 
  technology: { 
    name: string; 
    images: { portrait: string; landscape: string; }; 
    description: string;
  }[];
  planet: number;
  setPlanet: (planetIdx: number) => void;
  crewMember: number;
  setCrewMember: (crewIdx: number) => void;
  tech: number;
  setTech: (techIdx: number) => void;
};

const AppRouter: FC<Props> = ({ 
  home, 
  destinations, 
  crew, 
  technology, 
  planet, 
  setPlanet, 
  crewMember, 
  setCrewMember, 
  tech, 
  setTech 
}) => {
  
  return (
    <div className="approuter-container">
        <Routes>
            <Route 
              path="/space-tourism" 
              element={<Home home={home}/>} 
            />
            <Route 
              path="/space-tourism/destination" 
              element={
                <Destination 
                  destinations={destinations}
                  planet={planet}
                  setPlanet={setPlanet}
                />
              } 
            />
            <Route 
              path="/space-tourism/crew" 
              element={
                <Crew 
                  crew={crew}
                  crewMember={crewMember}
                  setCrewMember={setCrewMember}
                />
              } 
            />
            <Route 
              path="/space-tourism/technology" 
              element={
                <Technology 
                  technology={technology}
                  tech={tech}
                  setTech={setTech}
                />
              } 
            />
        </Routes>
    </div>
  );
};

export default AppRouter;