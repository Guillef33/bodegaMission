import React, { useContext, useEffect } from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import Quizz from "../components/Quizz/Quizz";
// import Audio from './components/audio/Audio';
import questions from "../components/questions/questions";

import Play from "../components/audio/Play";
import Player from "../components/audio/Player";
import Counter from "../components/Counter/Counter";

import BackVideo from "../assets/backgroundvideo.mp4";
import BackVideo2 from "../assets/backVideo.mp4";

import Welcome from "../components/InitialText/Welcome";

import CircularProgressBar from "../components/Counter/CircularProgressBar";
import CircularProgressWithLabel from "../components/Counter/MaterialProgress";

import BlancoNegro from "../assets/vinedos.mp4";
import ColorVideo from "../assets/production.mp4";
import { useState } from "react";
import OutOfTime from "../components/outOfTime/OutOfTime";

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../data/config.js";

function Guests() {
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
  const [timeIsUp, setTimeIsUp] = useState(false);
  // useEffect (() => {

  //     const obtenerDatos = async () => {
  //     const datos = await getDocs(collection(db, "test"));
  //     datos.forEach((dato) => {
  //       return console.log(dato.data());
  //     })

  //     }
  //     obtenerDatos();

  // }, [])

  return (
    <div className="container">
      {timeIsUp ? (
        <OutOfTime />
      ) : showQuizz ? (
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
            <CircularProgressWithLabel
              timeIsUp={timeIsUp}
              setTimeIsUp={setTimeIsUp}
            />
          </div>
        </div>
      ) : (
        <>
          <Welcome />
        </>
      )}

    </div>
  );
}

export default Guests;
