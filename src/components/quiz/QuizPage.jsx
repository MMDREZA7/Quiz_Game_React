import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "../views/Home";
import Quizzes from "./Quizzes";
import AllQuestion from "./AllQuestion";
import "./quiz-style.css";

const QuizPage = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "What is the capital of France?",
      answer: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswerNumber: 2,
    },
    {
      questionText: "Which one of the Cars is the best Car?",
      answer: ["Lamborghini", "Bugatti", "Porsche", "Ferrari"],
      correctAnswerNumber: 1,
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      answer: ["Mars", "Earth", "Jupiter", "Venus"],
      correctAnswerNumber: 0,
    },
    {
      questionText: "Which is the largest mammal in the world?",
      answer: ["Elephant", "Giraffe", "Rhinoceros", "Blue Whale"],
      correctAnswerNumber: 3,
    },
    {
      questionText: "What is the boiling point of water at sea level?",
      answer: ["90°C", "180°C", "100°C", "120°C"],
      correctAnswerNumber: 2,
    },
    {
      questionText: "Which language is primarily spoken in Brazil?",
      answer: ["Portuguese", "Spanish", "English", "French"],
      correctAnswerNumber: 0,
    },
  ]);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div className="quiz-page">
      <Router>
        <nav>
          <Link className="router-link" to={"/"}>
            Home
          </Link>
          <Link className="router-link" to={"/quiz"}>
            Quiz Game
          </Link>
          <Link className="router-link" to={"/all-questions"}>
            Questions
          </Link>
        </nav>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route
            path="/quiz"
            element={
              <Quizzes newQuestion={addQuestion} questions={questions} />
            }
          />
          <Route
            path="/all-questions"
            element={<AllQuestion questions={questions} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default QuizPage;
