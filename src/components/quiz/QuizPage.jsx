import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../views/Home";
import Quizzes from "./Quizzes";
import "./quiz-style.css";

const QuizPage = () => {
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
        </nav>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/quiz" Component={Quizzes} />
        </Routes>
      </Router>
    </div>
  );
};

export default QuizPage;
