import React from "react";
import "./Intro.css";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-container">
      <div className="hero-text">
        <h1>Pop Quiz!</h1>
      </div>

      <div className="small-text">
        <h2>Let's play</h2>
        <p>Are you ready</p>
      </div>

      <div className="play-buttons">
        <button onClick={() => navigate("/quiz")}>Start</button>
        <button onClick={() => navigate("/exit")}>I'll pass</button>
      </div>
    </div>
  );
};

export default Intro;
