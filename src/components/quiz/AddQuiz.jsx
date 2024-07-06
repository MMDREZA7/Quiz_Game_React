import React, { useState } from "react";

const AddQuestion = ({ onSubmit, show }) => {
  const [questionText, setQuestionText] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState();

  const formSubmit = (e) => {
    e.preventDefault();

    if (correctAnswer > 4 || correctAnswer < 1) {
      alert("Correct Answer should be more than 4");
    } else {
      const question = {
        questionText: questionText,
        answer: [answer1, answer2, answer3, answer4],
        correctAnswerNumber: correctAnswer - 1,
      };
      onSubmit(question);

      setQuestionText("");
      setAnswer1("");
      setAnswer2("");
      setAnswer3("");
      setAnswer4("");
      setCorrectAnswer("");
    }
  };

  const questionTextChange = (e) => {
    const question = e.target.value;
    setQuestionText(question);
  };
  const answer1Change = (e) => {
    const answer = e.target.value;
    setAnswer1(answer);
  };
  const answer2Change = (e) => {
    const answer = e.target.value;
    setAnswer2(answer);
  };
  const answer3Change = (e) => {
    const answer = e.target.value;
    setAnswer3(answer);
  };
  const answer4Change = (e) => {
    const answer = e.target.value;
    setAnswer4(answer);
  };
  const correctAnswerChange = (e) => {
    console.log(e);
    const correctAnswer = e.target.value;
    setCorrectAnswer(correctAnswer);
  };

  return (
    <form
      className={`add-question-box ${show ? "shown-add-question-box" : ""}`}
      onSubmit={(e) => formSubmit(e)}
    >
      {/* //! Question Text */}
      <label onSubmit={onSubmit}>Your Question</label>
      <input
        required
        className="input question-input"
        type="text"
        name="question"
        placeholder="Question"
        value={questionText}
        onChange={(e) => questionTextChange(e)}
      />
      <label>Answers</label>
      <div className="answers">
        {/* //! Answer1 */}
        <label>1.</label>
        <input
          required
          className="input answer-input"
          type="text"
          name="answer"
          placeholder="Answer1"
          value={answer1}
          onChange={(e) => answer1Change(e)}
        />
        {/* //! Answer2 */}
        <label>2.</label>
        <input
          required
          className="input answer-input"
          type="text"
          name="answer"
          placeholder="Answer2"
          value={answer2}
          onChange={(e) => answer2Change(e)}
        />
        {/* //! Answer3 */}
        <label>3.</label>
        <input
          required
          className="input answer-input"
          type="text"
          name="answer"
          placeholder="Answer3"
          value={answer3}
          onChange={(e) => answer3Change(e)}
        />
        {/* //! Answer4 */}
        <label>4.</label>
        <input
          required
          className="input answer-input"
          type="text"
          name="answer"
          placeholder="Answer4"
          value={answer4}
          onChange={(e) => answer4Change(e)}
        />
      </div>
      <label>Correct Answer</label>
      {/* //! Correct Answer */}
      <input
        required
        className="input correct-answer"
        type="number"
        name="correct answer"
        placeholder="Number of Correct answer"
        value={correctAnswer}
        onChange={(e) => correctAnswerChange(e)}
      />
      {/* //! Button */}
      <button type="submit" className="btn add-question-btn">
        Add Question
      </button>
    </form>
  );
};

export default AddQuestion;
