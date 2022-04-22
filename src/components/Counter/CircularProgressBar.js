import React, { useState, useEffect, useContext, Fragment } from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./progressBar.css";

import { AppContext } from "../../context/AppContext";

import ChangingProgressProvider from "./ChangingProgressProvider";
import LinearProgress from "@mui/material/LinearProgress/LinearProgress";

function CircularProgressBar() {
  const { setStatus, STATUS, setShowQuizz } = useContext(AppContext);
  //   const [style, setStyle] = useState("Normal");
  const normalise = (value) => ((value - 1) * 100) / (120 - 1);

  const tiempoRestante = [
    90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72,
    71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53,
    52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34,
    33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15,
    14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
  ];

  useEffect(() => {
    TiempoDeJuego();
  }, [tiempoRestante]);

  function TiempoDeJuego() {
    if (tiempoRestante < 40) {
    }
    if (tiempoRestante === 0) {
      setStatus(STATUS.STOPPED);

      setShowQuizz(false);
    }
  }

  return (
    <section className="progressbar-container">
      {(props) => (
        <Fragment>
          <CircularProgressbar
            className="circle-counter"
            variant="determinate"
            value={normalise(props.value)}
          />
          <LinearProgress
            variant="determinate"
            value={normalise(props.value)}
          />
        </Fragment>
      )}
    </section>
  );
}

export default CircularProgressBar;
