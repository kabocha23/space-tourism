import React, { useState, FC, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import data from './data/siteData.json'
import './App.css';



const App: FC = () => {

  return (
    <div className='App'>
      <Navbar 
        destinations={data.destinations} 
        crew={data.crew} 
        technology={data.technology}
      />
    </div>
  );
}

export default App;
