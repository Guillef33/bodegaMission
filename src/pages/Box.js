import React, { useContext } from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import Quizz from "../components/Quizz/Quizz";
// import Audio from './components/audio/Audio';
import questions from "../components/questions/questions";

import Play from "../components/audio/Play";
import Player from "../components/audio/Player";
import Counter from "../components/Counter/Counter";

import BackVideo from "../assets/backgroundvideo.mp4";
import BackVideo2 from "../assets/backVideo.mp4";

import InitialText from "../components/InitialText/InitialText";

function Box() {
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
  } = useContext(AppContext);

  const StartGame = () => {
    showGame();
    setStatus(STATUS.STARTED);
  };

  return (
    <div className="container-box">
      <Player />
      {showQuizz ? (
        <div className="app">
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
      ) : (
        <>
          <InitialText />
          <button className="playGameButton" onClick={StartGame}>
            Start
          </button>
        </>
      )}
      <Counter />
    </div>
  );
}

export default Box;
