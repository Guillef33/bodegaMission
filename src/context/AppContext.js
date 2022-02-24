import React, { createContext, useState, useEffect, useRef } from "react";
import questions from "../components/questions/questions";

export const AppContext = createContext(null);

function AppProvider(props) {
  const [showQuizz, setShowQuizz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const STATUS = {
    STARTED: "Started",
    STOPPED: "Stopped",
  };

    // LIMPIAR CONTADOR
  // Parte del contador
  // const INITIAL_COUNT = 90;

  // const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  // const [status, setStatus] = useState(STATUS.STOPPED);

  // const [losing, SetLosing] = useState(false);

  // const secondsToDisplay = secondsRemaining;

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

  const restartGame = (e) => {
    setShowScore(false);
    setCurrentQuestion(0);
    // setSecondsRemaining(INITIAL_COUNT);
  };

  const StartGame = () => {
    showGame();
    // setStatus(STATUS.STARTED);
    // setSecondsRemaining(INITIAL_COUNT);
    setCurrentQuestion(0);
  };

  function showGame() {
    setShowQuizz(true);
  }

  const handleStart = () => {
    // setStatus(STATUS.STARTED);
  };

  // function useInterval(callback, delay) {
  //   const savedCallback = useRef();

  //   useEffect(() => {
  //     savedCallback.current = callback;
  //   }, [callback]);

  //   // Set up the interval.
  //   useEffect(() => {
  //     function tick() {
  //       savedCallback.current();
  //     }
  //     if (delay !== null) {
  //       let id = setInterval(tick, delay);
  //       return () => clearInterval(id);
  //     }
  //   }, [delay]);
  // }

  // const twoDigits = (num) => String(num).padStart(2, "0");

  // useInterval(
  //   () => {
  //     if (secondsRemaining > 0) {
  //       setSecondsRemaining(secondsRemaining - 1);
  //     } else {
  //       setStatus(STATUS.STOPPED);
  //     }
  //   },
  //   status === STATUS.STARTED ? 1000 : null
  //   // passing null stops the interval
  // );

  function handleClose() {
    console.log(showQuizz);
    setShowQuizz(false);
    // setStatus(STATUS.STOPPED);
  }

  return (
    <AppContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
