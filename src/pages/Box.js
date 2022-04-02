import React, { useState, useContext, useEffect, useParam } from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import WelcomeBox from "../components/Welcome/Box/WelcomeBox";

import { useParams } from "react-router-dom";

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
    StartGame,
  } = useContext(AppContext);
  const [timeIsUp, setTimeIsUp] = useState(false);

  const { homeBox } = useParams();

  //TODO: ver si se tiene que ir eligiendo las pantallas o las rutas
  return (
    <div className="container">
      <WelcomeBox type={"sin botella"} />
    </div>
  );
}

export default Box;
