import React, { useState } from "react";
import Quiz from "./Quiz";
import Score from "./Score";
import IsStart from "./IsStart";

const Quizzes = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [questions, setQuestions] = useState([
    {
      questionsText: "What is the capital of France?",
      answer: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswerNumber: 2,
    },
    {
      questionsText: "Which one of the Cars is the best Car?",
      answer: ["Lamborghini", "Bugatti", "Porsche", "Ferrari"],
      correctAnswerNumber: 1,
    },
    {
      questionsText: "Which planet is known as the Red Planet?",
      answer: ["Mars", "Earth", "Jupiter", "Venus"],
      correctAnswerNumber: 0,
    },
    {
      questionsText: "Which is the largest mammal in the world?",
      answer: ["Elephant", "Giraffe", "Rhinoceros", "Blue Whale"],
      correctAnswerNumber: 3,
    },
    {
      questionsText: "What is the boiling point of water at sea level?",
      answer: ["90°C", "180°C", "100°C", "120°C"],
      correctAnswerNumber: 2,
    },
    {
      questionsText: "Which language is primarily spoken in Brazil?",
      answer: ["Portuguese", "Spanish", "English", "French"],
      correctAnswerNumber: 0,
    },
  ]);

  const answerBtnProcess = (e) => {
    const correctAnswer =
      questions[currentQuestion].answer[
        questions[currentQuestion].correctAnswerNumber
      ];
    const userResponse = e.target.childNodes[0].data;

    if (currentQuestion < questions.length) {
      if (userResponse === correctAnswer) {
        setUserScore(userScore + 1);
      }
      setCurrentQuestion(currentQuestion + 1);
    } else {
      return;
    }
  };

  if (isStart) {
    return (
      <div className="box">
        {currentQuestion === questions.length ? (
          <Score userScore={userScore} />
        ) : (
          <Quiz
            questionText={questions[currentQuestion].questionsText}
            answers={questions[currentQuestion].answer}
            onClick={(e) => answerBtnProcess(e)}
          />
        )}
      </div>
    );
  } else {
    return (
      <IsStart
        onClick={() => {
          setIsStart(true);
        }}
      />
    );
  }
};

export default Quizzes;
