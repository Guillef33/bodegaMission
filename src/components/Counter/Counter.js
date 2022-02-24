import React, { useState, useEffect, useRef, useContext } from "react";
import "./Counter.css";

import { AppContext } from "../../context/AppContext";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Counter() {
  const {
    twoDigits,
    secondsToDisplay,
    handleStart,
    losing,
    setStatus,
    STATUS,
    setShowQuizz,
  } = useContext(AppContext);
  const [style, setStyle] = useState("Normal");

  console.log(secondsToDisplay);

  /* componentDidMount */
  /* componentDidUpdate */
  /* componentDidUnmount */
  useEffect(() => {
    TiempoDeJuego();
  }, [secondsToDisplay]);

  function TiempoDeJuego() {
    if (secondsToDisplay < 40) {
      //    agregar clase que cambie el color o genere un borde o algo
      setStyle("Danger");
    }
    if (secondsToDisplay === 0) {
      setStatus(STATUS.STOPPED);
      setStyle("Finish");
      setShowQuizz(false);
    }
  }

  return (
    <div className="Counter">
      <div className="countdown-container">
        <div className="seconds">
          <h2 className={style}>{twoDigits(secondsToDisplay)}</h2>
          <p>Seconds</p>
        </div>
        {/* <div>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div> */}
      </div>
    </div>
  );
}

export default Counter;
