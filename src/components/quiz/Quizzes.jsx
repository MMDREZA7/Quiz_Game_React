import React, { useState } from "react";
import Quiz from "./Quiz";
import Score from "./Score";
import AddQuestion from "./AddQuiz";

const Quizzes = ({ questions, newQuestion }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [showAddQuiz, setShowAddQuiz] = useState(false);

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

  const showAddQuizForm = () => {
    setShowAddQuiz(!showAddQuiz);
  };

  return (
    <>
      <button
        className={`add-quiz-btn ${!showAddQuiz ? "open-form" : "close-form"}`}
        onClick={showAddQuizForm}
      >
        Add Quiz
      </button>

      <div className="box">
        <AddQuestion onSubmit={newQuestion} show={showAddQuiz} />

        {currentQuestion === questions.length ? (
          <Score userScore={userScore} />
        ) : (
          <Quiz
            show={showAddQuiz}
            questionText={questions[currentQuestion].questionText}
            answers={questions[currentQuestion].answer}
            onClick={(e) => answerBtnProcess(e)}
          />
        )}
      </div>
    </>
  );
};

export default Quizzes;
