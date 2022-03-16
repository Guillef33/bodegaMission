import React, { createContext, useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import questions from "../components/questions/questions";

export const AppContext = createContext(null);

function AppProvider(props) {
  const [showQuizz, setShowQuizz] = useState(false);
  const [showStartMission, setShowStartMission] = useState(false);
  const [showBeforeComponent, setShowBeforeComponent] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // Modelo para guardar los datos y las respuestas del usuario
  const [resp, setResp] = useState([]);
  // let navigate = useNavigate();

  const addResp = (newResp) => {
    //cuando más de una respuesta es correcta, solo identifico el id, y añado un objeto más al asnwerOption.
    setResp([...resp, newResp]);
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const pasarPregunta = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const volverPregunta = () => {
    const beforeQuestion = currentQuestion - 1;
    if (beforeQuestion < questions.length) {
      setCurrentQuestion(beforeQuestion);
    } else {
      setShowScore(true);
    }
  };

  const omitirPregunta = () => {
    pasarPregunta();
  };

  const restartGame = (e) => {
    setShowScore(false);
    setCurrentQuestion(0);
    // navigate('/home')

  };

  const StartGame = (e) => {
    showGame();
    setCurrentQuestion(0);
  };

  function showGame() {
    setShowQuizz(true);
  }

  function showMission() {
    setShowStartMission(true);
  }

  function showBefore(e) {
    setShowBeforeComponent(true);
  }

  const handleStart = () => {
    // setStatus(STATUS.STARTED);
  };

  function handleClose() {
    console.log(showQuizz);
    setShowQuizz(false);
    // setStatus(STATUS.STOPPED);
  }

  return (
    <AppContext.Provider
      value={{
        addResp,
        showScore,
        showQuizz,
        showGame,
        questions,
        currentQuestion,
        score,
        restartGame,
        handleAnswerOptionClick,
        // setStatus,
        // STATUS,
        // secondsRemaining,
        // secondsToDisplay,
        // twoDigits,
        // useInterval,
        handleStart,
        // losing,
        handleClose,
        setShowQuizz,
        StartGame,
        pasarPregunta,
        omitirPregunta,
        volverPregunta,
        showStartMission,
        setShowStartMission,
        showMission,
        showBefore,
        setShowBeforeComponent,
        showBeforeComponent,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;

// const STATUS = {
//   STARTED: "Started",
//   STOPPED: "Stopped",
// };

// LIMPIAR CONTADOR
// Parte del contador
// const INITIAL_COUNT = 90;

// const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
// const [status, setStatus] = useState(STATUS.STOPPED);

// const [losing, SetLosing] = useState(false);

// const secondsToDisplay = secondsRemaining;
