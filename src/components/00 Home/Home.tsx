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
        <p className="heading-5 lavender">{home.intro.toUpperCase()}</p>
        <p className="heading-1">{home.title.toUpperCase()}</p>
        <p className="body-text lavender">{home.description}</p>
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