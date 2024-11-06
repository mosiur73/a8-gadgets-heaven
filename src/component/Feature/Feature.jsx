import React, { useState } from 'react';
import './Feature.css'
import { Helmet } from 'react-helmet';
const Feature = () => {
  
    const questions = [
      {
        id: 1,
        question: "1. Which method is used to add an element to the end of an array in JavaScript?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
      },
      {
        id: 2,
        question: "2. What will `typeof NaN` return in JavaScript?",
        options: ["undefined", "null", "object", "number"],
        answer: "number"
      },
      {
        id: 3,
        question: "3. Which symbol is used for single-line comments in JavaScript?",
        options: ["#", "//", "<!-- -->", "/* */"],
        answer: "//"
      },
      {
        id: 4,
        question: "4. What does `JSON` stand for in JavaScript?",
        options: ["JavaScript Online Notation", "JavaScript Object Notation", "Java Serialization Output Network", "JavaScript Object Network"],
        answer: "JavaScript Object Notation"
      },
      {
        id: 5,
        question: "5. Which method is used to convert a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"],
        answer: "JSON.parse()"
      },
      {
        id: 6,
        question: "6. How do you declare a constant in JavaScript?",
        options: ["let", "const", "var", "constant"],
        answer: "const"
      },
      {
        id: 7,
        question: "7. Which keyword is used to check if a property exists in an object?",
        options: ["exists", "in", "has", "contains"],
        answer: "in"
      },
      {
        id: 8,
        question: "8. What does `===` operator check in JavaScript?",
        options: ["Equality with type conversion", "Equality without type conversion", "Assignment", "None of the above"],
        answer: "Equality without type conversion"
      },
      {
        id: 9,
        question: "9. Which JavaScript function is used to delay code execution?",
        options: ["delay()", "pause()", "setTimeout()", "setInterval()"],
        answer: "setTimeout()"
      },
      {
        id: 10,
        question: "10. Which method would you use to find the length of a string in JavaScript?",
        options: ["size()", "length", "count()", "getLength()"],
        answer: "length"
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
                      <Helmet>
                <meta charSet="utf-8" />
                <title>gadgets-Features page</title>
                
            </Helmet>
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