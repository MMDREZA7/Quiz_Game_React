import "./quiz-style.css";
import Quizzes from "./Quizzes";
import Home from "../views/Home.jsx";

const Score = ({ userScore }) => {
  return (
    <div className={`box ${userScore > 1 ? "win" : "lose"}`}>
      <h1 className="sticker">{userScore > 1 ? "🎉" : "😞"}</h1>
      <h2>{userScore > 1 ? "You win" : "You Lose"}</h2>
      <h1>Your Score : {userScore}</h1>
    </div>
  );
};

export default Score;
