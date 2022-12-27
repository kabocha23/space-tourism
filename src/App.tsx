import React, { FC, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import AppRouter from "./components/AppRouter/AppRouter"
import data from './data/siteData.json'
import './App.css';

const App: FC = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [planet, setPlanet] = useState(0);
  const [crewMember, setCrewMember] = useState(0);
  const [tech, setTech] = useState(0);

  return (
    <div className='App'>
      <Navbar 
        isNavExpanded={isNavExpanded} 
        setIsNavExpanded={setIsNavExpanded}      
      />
      <AppRouter 
        home={data.home}
        destinations={data.destinations} 
        crew={data.crew} 
        technology={data.technology}
        planet={planet}
        setPlanet={setPlanet}
        crewMember={crewMember}
        setCrewMember={setCrewMember}
        tech={tech}
        setTech={setTech}
      />
    </div>
  );
}

export default App;
