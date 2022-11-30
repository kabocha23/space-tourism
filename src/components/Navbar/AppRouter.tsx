import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../00 Home/Home';
import Destination from '../01 Destination/Destination';
import Crew from '../02 Crew/Crew';
import Technology from '../03 Technology/Technology';

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
        </Routes>
    </div>
  );
};

export default AppRouter;