import React, { useContext } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { AppContext } from "../../context/AppContext";
import { isResponseFull } from "../../helpers/validationsContext";
import { Toast } from "../../ui/toast";

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

  const handleclickNext = async () => {
    const question = resp.find((el) => el.id === currentQuestion + 1);
    if (question && isResponseFull(resp,question.id,questions[currentQuestion].correctQty)) {
      pasarPregunta();
    } else {
      await Toast.fire({
        icon: "warning",
        title: `Choose ${questions[currentQuestion].correctQty} answer/s`,
      });
    }
  };

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
        <button className="arrow-back" onClick={handleclickNext}>
          {" "}
          <IoIosArrowForward />
        </button>
        <button className="arrow-mobile-back" onClick={handleclickNext}>
          {" "}
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default ControlButtonsGame;
