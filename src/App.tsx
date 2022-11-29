import React from 'react';
import Home from './components/00 Home/Home';
import Destination from './components/01 Destination/Destination';
import Crew from './components/02 Crew/Crew';
import Technology from './components/03 Technology/Technology';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Destination />
      <Crew />
      <Technology />
    </div>
  );
}

export default App;
