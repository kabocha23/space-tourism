import React, { FC } from 'react';
import Navbar from './components/Navbar/Navbar';
import AppRouter from "./components/AppRouter/AppRouter"
import data from './data/siteData.json'
import './App.css';

const App: FC = () => {

  return (
    <div className='App'>
      <Navbar />
      <AppRouter 
        destinations={data.destinations} 
        crew={data.crew} 
        technology={data.technology}
      />
    </div>
  );
}

export default App;
