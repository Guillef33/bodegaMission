import React, { useState, useContext, useEffect, useParam} from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import Quizz from "../components/Quizz/Quizz";
import questions from "../components/questions/questions";
import Player from "../components/audio/Player";

import Welcome from "../components/InitialText/Welcome";

import CircularProgressWithLabel from "../components/Counter/MaterialProgress";

import OutOfTime from "../components/outOfTime/OutOfTime";

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../data/config.js";

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
  //TODO: ver si se tiene que ir eligiendo las pantallas o las rutas
  return (
    <div className="container">
      <Welcome type={ "sin botella" }/>
    </div>
  );
}

export default Home;
