import React from "react";
import { useNavigate } from "react-router-dom";
import "./Exit.css"

const Exit = () => {
  const navigate = useNavigate();
  return (
    <div className="exit-container">
      <p>Oh so you're a chicken! It's fine. Goodbye</p>
      <button className="exit-button" onClick={() => navigate("/quiz")}>
        Change Your Mind?
      </button>
    </div>
  );
};

export default Exit;
