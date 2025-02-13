import React, { useState } from "react";
import "./Quiz.css";
import "./Intro.css";
import Questions from "./questions.json";

const Quiz = () => {
  // state to change questions
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // state to set score
  const [score, setScore] = useState(0);
  // state to store user's answer
  const [answer, setAnswer] = useState(null);
  // state to check whether or not answer is correct
  const [isItCorrect, setIsItCorrect] = useState(null);

  // function to store user answer & to check correctness
  const handleAnswer = (option) => {
    setAnswer(option);
    setIsItCorrect(Questions[currentQuestion].answer === option);

    setInterval(() => {
      setAnswer(null);
      setIsItCorrect(null);
      setCurrentQuestion((prev) => prev + 1);
    });
  };
  {
    /*
  // function to change questions as user picks an answer
  const handleNextQuestion = () => {
    // make sure there are still questions left in the list
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Quiz completed!");
    }
  };*/
  }

  return (
    currentQuestion < Questions.length && (
      <div className="quiz-container">
        <div className="question">
          <h2>{`Question ${currentQuestion + 1}`}</h2>
          <p>{Questions[currentQuestion].question}</p>
        </div>
        <div className="options">
          {Questions[currentQuestion].options.map((option, optionIndex) => {
            return (
              <button
                className={`option-button ${
                  answer
                    ? option === Questions[currentQuestion].answer
                      ? "correct" // Green for correct answer
                      : option === answer
                        ? "wrong" // Red for wrong answer
                        : ""
                    : ""
                }`}
                key={optionIndex}
                onClick={() => handleAnswer(option)}
                disabled={answer !== null}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Quiz;
