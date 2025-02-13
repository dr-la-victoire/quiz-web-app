import React from "react";
import "./Intro.css";
import { useLocation, Link } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const score = location.state?.score || 0;
  return (
    <div className="result-container">
      <h1>Game Over</h1>
      <p>You scored {score} points!</p>
      <Link to="/" className="restart">
        <button>Play Again</button>
      </Link>
    </div>
  );
};

export default Result;
