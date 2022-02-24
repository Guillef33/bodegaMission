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
    <div className="container">
      <video loop autoPlay muted>
        <source src={BackVideo2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {showQuizz ? (
        <div className="game-container">
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

          <Player />
          {/* <CircularProgressBar /> */}
          <div className="Counter">
            <CircularProgressWithLabel />
          </div>
        </div>
      ) : (
        <>
          <InitialText />
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
