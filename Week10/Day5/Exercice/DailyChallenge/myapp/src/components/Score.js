import { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";

const Score = (props) => {
  const { score } = useContext(AppContext);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (score >= highScore) {
      setHighScore(score);
    }
  });

  return (
    <>
      <div className="scores">
        <h1>
          Score: {score} / High Score: {highScore}
        </h1>
      </div>
    </>
  );
};

export default Score;
