import React, { createContext, useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import questions from "../components/questions/questions";
import { inCollection } from "../helpers/validationsContext";

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

  //TODO:
  const addResp = (newResp) => {
    // const {  }
    //inCollection verifica si el id de la pregunta ya existe en la coleción
    if (inCollection(newResp.id, resp)) {
      console.log("entré", resp);
      //Este map retorna un nuevo array añadiendo un respuesta más para una determinada pregunta
      let newCollection = resp.map((el) => {
        if (el.id === newResp.id) {
          el.answerOption.push(newResp.answerOption[0]);
          return el;
        } else {
          return el;
        }
      });
      setResp(newCollection);
    } else {
      //cuando más de una respuesta es correcta, solo identifico el id, y añado un objeto más al asnwerOption.
      setResp([...resp, newResp]);
    }
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
    if (currentQuestion !== 0) {
      const beforeQuestion = currentQuestion - 1;
      if (beforeQuestion < questions.length) {
        setCurrentQuestion(beforeQuestion);
      } else {
        setShowScore(true);
      }
    }
  };

  const omitirPregunta = () => {
    pasarPregunta();
  };

  const restartGame = (e) => {
    setShowScore(false);
    setResp( [] );
    setCurrentQuestion(0);
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
  function localStorageSet(key, item) {
    try {
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.log(error);
    }
  }
  function localStorageGet(key) {
    try {
      let result = JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        resp,
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

// const secondsToDisplay = secondsRemaini
