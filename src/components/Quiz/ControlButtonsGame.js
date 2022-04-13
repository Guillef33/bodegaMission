import React, { useContext } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { AppContext } from "../../context/AppContext";

import "./ControlButtonsGame.scss";

function ControlButtonsGame() {
  const {
    resp,
    addResp,
    removeResp,
    showScore,
    questions,
    currentQuestion,
    handleClose,
    pasarPregunta,
    volverPregunta,
  } = useContext(AppContext);
  return (
    <div className="question-fila-mobile">
      <div className="box-form-control box-form-control--left">
        <button className="arrow-forward" onClick={() => volverPregunta()}>
          {" "}
          <IoIosArrowBack />
        </button>
        <button
          className="arrow-mobile-forward"
          onClick={() => volverPregunta()}
        >
          {" "}
          <IoIosArrowBack />
        </button>
      </div>


      <div className="box-form-control box-form-control--right">
        <button className="arrow-back" onClick={() => pasarPregunta()}>
          {" "}
          <IoIosArrowForward />
        </button>
        <button className="arrow-mobile-back" onClick={() => pasarPregunta()}>
          {" "}
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default ControlButtonsGame;
