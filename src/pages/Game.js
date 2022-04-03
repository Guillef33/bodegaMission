import React, { useState, useContext } from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import CircularProgressWithLabel from "../components/Counter/MaterialProgress";

import Quizz from "../components/Quiz/Quiz";
import Player from "../components/audio/Player";

import OutOfTime from "../components/outOfTime/OutOfTime";

const Game = () => {
  const {
    showScore,
    questions,
    currentQuestion,
    score,
    restartGame,
    handleAnswerOptionClick,
    setShowQuizz,
    timeIsUp
  } = useContext(AppContext);

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
            <CircularProgressWithLabel />
          </div>
        </div>
      )}
    </>
  );
};

export default Game;
