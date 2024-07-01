import React from "react";

const IsStart = ({ onClick }) => {
  return (
    <div className="box">
      <button className="btn" onClick={onClick}>
        Click For Start Game
      </button>
    </div>
  );
};

export default IsStart;
