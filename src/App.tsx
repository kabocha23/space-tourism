import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import siteData from './data/siteData.json'
import './App.css';

function App() {

  const [data, setData] = useState(siteData);
  return (
    <div className='App'>
      <Navbar />
    </div>
  );
}

export default App;
