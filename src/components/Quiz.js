import React from "react";

const Quiz = () => {
  return (
    <div className="quiz-container">
      <div className="question">
        <h2>Question 1</h2>
        <p>How many bones are in the human body</p>
      </div>
      <div className="options">
        <button className="option-button">1000</button>
        <button className="option-button">499</button>
        <button className="option-button">206</button>
        <button className="option-button">58</button>
      </div>
    </div>
  );
};

export default Quiz;
