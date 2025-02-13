import React, { useState } from "react";
import "./Quiz.css";
import "./Intro.css";
import Questions from "./questions.json";

const Quiz = () => {
  // state to change questions
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userOption, setUserOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // function to change questions as user picks an answer
  const handleNextQuestion = (option) => {
    if (isAnswered) return;

    setUserOption(option);
    setIsAnswered(true);

    // delay to show answers
    setTimeout(() => {
      // make sure there are still questions left in the list
      if (currentQuestion < Questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setUserOption(null);
        setIsAnswered(false);
      } else {
        alert("Quiz completed!");
      }
    }, 1500);
  };

  return (
    <div className="quiz-container">
      <div className="question">
        <h2>{`Question ${currentQuestion + 1}`}</h2>
        <p>{Questions[currentQuestion].question}</p>
      </div>
      <div className="options">
        {Questions[currentQuestion].options.map((option, optionIndex) => {
          let className = "option-button";

          if (isAnswered) {
            if (option === Questions[currentQuestion].answer) {
              className += "-correct";
            } else if (option === userOption) {
              className += "-wrong";
            }
          }

          return (
            <button
              key={optionIndex}
              className={className}
              onClick={() => handleNextQuestion(option)}
              disabled={isAnswered}
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
