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
      <div className="home-blurb">
        <h3>{home.intro}</h3>
        <h1>{home.title}</h1>
        <p>{home.description}</p>
      </div>
      <div className="home-explore">
        <button>EXPLORE</button>
      </div>
    </div>
  );
};

export default Home;