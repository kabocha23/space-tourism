import React, { FC, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import AppRouter from "./components/AppRouter/AppRouter"
import data from './data/siteData.json'
import './App.css';

const App: FC = () => {

  const [planet, setPlanet] = useState(0);

  return (
    <div className='App'>
      <Navbar />
      <AppRouter 
        home={data.home}
        destinations={data.destinations} 
        crew={data.crew} 
        technology={data.technology}
        planet={planet}
        setPlanet={setPlanet}
      />
    </div>
  );
}

export default App;
