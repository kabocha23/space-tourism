import React, { FC } from "react";
import "./Home.css";

interface HomeProps {
  home: {
    intro: string;
    title: string;
    description: string;
  };
}

const Home: FC<HomeProps> = ({ home }) => {
  return (
    <div className="home-container">
      <div className="home-blurb div-flex-center">
        <p id="home-intro">{home.intro}</p>
        <p id="home-title">{home.title}</p>
        <p id="home-desc">{home.description}</p>
      </div>
      <div className="home-explore">
        <div className="home-explore-btn div-flex-center">
          <button>EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default Home; 