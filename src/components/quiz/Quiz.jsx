const Quiz = ({ questionText, answers, onClick }) => {
  return (
    <div className="box question-box">
      <h3 className="question-text">{questionText}</h3>
      <div className="answer-box">
        {answers.map((answer, index) => (
          <button onClick={onClick} className="answer-btn" key={index}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
