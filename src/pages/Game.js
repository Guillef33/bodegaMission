import React, { useState, useContext } from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import CircularProgressWithLabel from "../components/Counter/MaterialProgress";

import Quizz from "../components/Quizz/Quizz";
import questions from "../components/questions/questions";

import Play from "../components/audio/Play";
import Player from "../components/audio/Player";

import Welcome from "../components/InitialText/Welcome";

import OutOfTime from "../components/outOfTime/OutOfTime";


const Game = () => {
  const {
    showScore,
    questions,
    currentQuestion,
    score,
    restartGame,
    handleAnswerOptionClick,
    showQuizz,
    showGame,
    setShowQuizz,
    StartGame,
  } = useContext(AppContext);
  const [timeIsUp, setTimeIsUp] = useState(false);
  return (
    <>
      {timeIsUp ? (
        <OutOfTime />
      ) : (
          <div className="game-container">
            <Quizz
              currentQuestion={currentQuestion}
              showScore={showScore}
              score={score}
              questions={questions}
              restartGame={restartGame}
              handleAnswerOptionClick={handleAnswerOptionClick}
              setShowQuizz={setShowQuizz}
            />

            <Player />
            <div className="Counter">
              <CircularProgressWithLabel
                timeIsUp={timeIsUp}
                setTimeIsUp={setTimeIsUp}
              />
            </div>
          </div>
      )}
    </>
  );
};

export default Game;
