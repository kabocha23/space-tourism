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
};

const AppRouter: FC<Props> = ({ home, destinations, crew, technology, planet, setPlanet }) => {
  return (
    <div className="approuter-container">
        <Routes>
            <Route 
              path="/" 
              element={<Home home={home}/>} 
            />
            <Route 
              path="/destination" 
              element={
                <Destination 
                  destinations={destinations}
                  planet={planet}
                  setPlanet={setPlanet}
                />
              } 
            />
            <Route 
              path="/crew" 
              element={<Crew crew={crew}/>} 
            />
            <Route 
              path="/technology" 
              element={<Technology technology={technology} />} 
            />
        </Routes>
    </div>
  );
};

export default AppRouter;