import React, { createContext, useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import questions from "../components/questions/questions";
import data from "../components/surveyBox/data";

import { inCollection } from "../helpers/validationsContext";

export const AppContext = createContext(null);

function AppProvider(props) {
  const [showQuizz, setShowQuizz] = useState(false);
  const [showStartMission, setShowStartMission] = useState(false);
  const [showBeforeComponent, setShowBeforeComponent] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScreen, setCurrentScreen] = useState(0);

  const [results, setResults] = useState(false);

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // Modelo para guardar los datos y las respuestas del usuario
  const [resp, setResp] = useState([]);
  // let navigate = useNavigate();
  const [timeIsUp, setTimeIsUp] = useState(false);

  const addResp = (newResp) => {
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

  const removeResp = (id, answerText) => {
    console.table({ id, answerText });
    let newResp = [...resp];
    newResp = newResp.map((el) => {
      if (el.id === id) {
        console.log("entre acaehfuehf0");
        let newAnswerOption = el.answerOption.filter(
          (answer) => answer.answerText !== answerText
        );
        console.log(newAnswerOption, answerText);
        return {
          id: el.id,
          questionText: el.questionText,
          answerOption: newAnswerOption,
        };
      } else {
        return el;
      }
    });
    setResp(newResp);
  };

  const scoreCalculator = () => {
    const arrayPoints = resp.map((el) => {
      if (el.answerOption.length) {
        let respValue = true;
        el.answerOption.forEach((answer) => {
          respValue = respValue * answer.isCorrect;
        });
        return respValue;
      } else {
        return false;
      }
    });
    const result = arrayPoints.reduce(
      (acumulator, currentValue) => acumulator + currentValue
    );
    console.log("result: ", arrayPoints.length);
    setScore(result);
  };

  const pasarPregunta = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      scoreCalculator();
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

  const pasarScreen = () => {
    const nextScreen = currentScreen + 1;
    if (nextScreen < data.length) {
      setCurrentScreen(nextScreen);
    } else {
      scoreCalculator();
      setResults(true);
    }
  };

  const volverScreen = () => {
    if (currentScreen !== 0) {
      const beforeScreen = currentScreen - 1;
      if (beforeScreen < data.length) {
        setCurrentScreen(beforeScreen);
      } else {
        setResults(true);
      }
    }
  };
  const restartGame = (e) => {
    setTimeIsUp(false);
    setShowScore(false);
    setResp([]);
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

  function handleClose() {
    console.log(showQuizz);
    setShowQuizz(false);
  }

  return (
    <AppContext.Provider
      value={{
        resp,
        addResp,
        removeResp,
        scoreCalculator,
        showScore,
        showQuizz,
        showGame,
        questions,
        currentQuestion,
        score,
        restartGame,
        handleClose,
        setShowQuizz,
        StartGame,
        pasarPregunta,
        // omitirPregunta,
        volverPregunta,
        showStartMission,
        setShowStartMission,
        showMission,
        showBefore,
        setShowBeforeComponent,
        showBeforeComponent,
        timeIsUp,
        setTimeIsUp,
        data,
        currentScreen,
        setCurrentScreen,
        pasarScreen,
        volverScreen,
        results,
        setResults,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
