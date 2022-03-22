import React, { useState, useContext, useEffect, useParam } from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import Quizz from "../components/Quizz/Quizz";
import questions from "../components/questions/questions";
import Player from "../components/audio/Player";

import WelcomeBox from "../components/Welcome/WelcomeBox";

import { useParams } from "react-router-dom";

import CircularProgressWithLabel from "../components/Counter/MaterialProgress";

import OutOfTime from "../components/outOfTime/OutOfTime";
import FormInvitados from "../components/Form/FormInvitados";

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


  const { homeRoute } = useParams();

  //TODO: ver si se tiene que ir eligiendo las pantallas o las rutas
  return (
    <div className="container">
      <FormInvitados />
    </div>
  );
}

export default Guests;
