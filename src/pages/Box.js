import React, { useContext } from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import Quizz from "../components/Quizz/Quizz";
// import Audio from './components/audio/Audio';
import questions from "../components/questions/questions";

import Play from "../components/audio/Play";
import Player from "../components/audio/Player";
import Counter from "../components/Counter/Counter";


import Welcome from "../components/Welcome/Welcome";

import CircularProgressBar from "../components/Counter/CircularProgressBar";
import CircularProgressWithLabel from "../components/Counter/MaterialProgress";
  
function Home() {
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
    setStatus,
    STATUS,
    StartGame,
  } = useContext(AppContext);

  return (
    <div className="container-box">
      {showQuizz ? (
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
          {/* <CircularProgressBar /> */}
          <div className="Counter">
            <CircularProgressWithLabel />
          </div>
        </div>
      ) : (
        <>
          <Welcome />
          <button className="playGameButton" onClick={StartGame}>
            Start
          </button>
        </>
      )}
      {/* <Counter /> */}
    </div>
  );
}

export default Home;
