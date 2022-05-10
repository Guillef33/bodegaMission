import React, { useState, useContext, useEffect } from "react";

import AppProvider, { AppContext } from "../context/AppContext";


import Quizz from "../components/Quiz/Quiz";
import Player from "../components/audio/Player";
import CircularProgressWithLabel from "../components/Counter/MaterialProgress";

import ReactGA4 from "react-ga4";


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

   useEffect(() => {
     ReactGA4.initialize("G-8PBY6X4E0X");
     // ReactGA4.pageview("/caca");
     ReactGA4.send({ hitType: "pageview", page: "/game" });
   }, []);


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

        </div>
      )}
    </>
  );
};

export default Game;
