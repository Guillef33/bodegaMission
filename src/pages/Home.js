import React, { useState, useContext, useEffect, useParam} from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import Welcome from "../components/Welcome/Guests/Welcome";

import { useParams } from "react-router-dom";

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


    const { homeRoute } = useParams();

  //TODO: ver si se tiene que ir eligiendo las pantallas o las rutas
  return (
    <div className="container">
      <Welcome type={ "sin botella" }/>
    </div>
  );
}

export default Home;
