import React, { useState, useContext, useEffect, useParam } from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import { useParams } from "react-router-dom";

import Yupform from "../components/Form/Yupform";

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


  const { guesRoute } = useParams();

  //TODO: ver si se tiene que ir eligiendo las pantallas o las rutas
  return (
    <div className="container">
      <Yupform />
    </div>
  );
}

export default Guests;
