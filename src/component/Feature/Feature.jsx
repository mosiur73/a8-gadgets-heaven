import React, { useState } from 'react';
import './Feature.css'
const Feature = () => {
  
    const questions = [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          answer: "Paris"
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Earth", "Jupiter", "Mars", "Saturn"],
          answer: "Jupiter"
        },
        {
          id: 3,
          question: "What is the boiling point of water?",
          options: ["90°C", "100°C", "110°C", "120°C"],
          answer: "100°C"
        }
      ];

      
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [score, setScore] = useState(0);
        const [showResult, setShowResult] = useState(false);
      
        const handleAnswerClick = (option) => {
          if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
          }
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
          } else {
            setShowResult(true);
          }
        };
      
        const handleRestartQuiz = () => {
          setCurrentQuestion(0);
          setScore(0);
          setShowResult(false);
        };
      
      
       
      
        
    return (
        <div className="quiz-container">
        <h2>Quiz</h2>
        {showResult ? (
          <div className="result">
            <h3>Your Score: <span className="score">{score} / {questions.length}</span></h3>
            <button className="restart-btn" onClick={handleRestartQuiz}>Restart Quiz</button>
          </div>
        ) : (
          <div>
            <h3 className="question">{questions[currentQuestion].question}</h3>
            <div className="options">
              {questions[currentQuestion].options.map((option) => (
                <button key={option} onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default Feature;