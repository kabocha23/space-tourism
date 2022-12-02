import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-subcontainer">
        <div className="home-blurb">
          <h3>So, you want to travel to</h3>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="home-explore">
          <button>EXPLORE</button>
        </div>
      </div>

    </div>
  );
};

export default Home;