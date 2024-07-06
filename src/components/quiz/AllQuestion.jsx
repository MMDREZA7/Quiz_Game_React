import React, { useState } from "react";

const AllQuestion = ({ questions }) => {
  return (
    <div className="all-questions-box">
      {questions.map((question, index) => (
        <div key={index} className="all-questions-item">
          <h3>{question.questionText}</h3>
          <div className="all-qu-answers">
            {question.answer.map((answer, index) => {
              return (
                <div
                  className={`answer-item ${
                    index === question.correctAnswerNumber ? "true-answer" : ""
                  }`}
                >
                  {answer}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllQuestion;
