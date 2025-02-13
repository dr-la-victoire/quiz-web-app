import React, { useState } from "react";
import "./Quiz.css";
import Questions from "./questions.json";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    // make sure there are still questions left in the list
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Quiz completed!");
    }
  };

  return (
    <div className="quiz-container">
      <div className="question">
        <p>{Questions[currentQuestion].question}</p>
      </div>
      <div className="options">
        {Questions[currentQuestion].options.map((option, optionIndex) => {
          return (
            <button
              className="option-button"
              key={optionIndex}
              onClick={handleNextQuestion}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
