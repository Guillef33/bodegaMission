import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Buttons from "../Buttons/Button";

import Score from "../score/Score";
import About from "../about/AboutUs";
import ControlButtonsGame from "./ControlButtonsGame";

import Player from "../audio/Player";
import CircularProgressWithLabel from "../Counter/MaterialProgress";

import "./Quiz.scss";

function Quiz() {
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

  //TODO: Este hangleOptionClick va a decidir si tenemos que agregar la respuesta o eliminarla
  const handleOptionClick = (e, newResp) => {
    addResp(newResp);
  };

  return (
    <>
      {showScore ? (
        <About />
      ) : (
        <>
          <div
            className="question-container"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url(${questions[currentQuestion].image})`,
            }}
          >
            <div className="buttons-indicators">
              <button
                className="arrow-forward"
                onClick={() => volverPregunta()}
              >
                {" "}
                <IoIosArrowBack />
                <p>Back</p>
              </button>
              <button className="arrow-back" onClick={() => pasarPregunta()}>
                {" "}
                <IoIosArrowForward />
                <p>Next</p>
              </button>
            </div>

            <div className="question-content-wrapper">
              <h2 className="question-number">
                <span style={{ fontWeight: "bold" }}>
                  {questions[currentQuestion].id}
                </span>{" "}
                of 9
              </h2>
              <ControlButtonsGame />

              <div className="question-section">
                <div className="question-count"></div>

                <div className="question-text">
                  <h3>{questions[currentQuestion].questionTitle}</h3>
                  <h4>{questions[currentQuestion].questionText}</h4>
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <Buttons
                      key={index}
                      resp={resp}
                      addResp={addResp}
                      removeResp={removeResp}
                      id={questions[currentQuestion].id}
                      maxQty={questions[currentQuestion].correctQty}
                      questionText={questions[currentQuestion].questionText}
                      answerOption={answerOption}
                    />
                    // {siTieneValue ? <Input />}
                  )
                )}
              </div>
            </div>
          </div>
          <Player />
          <div className="Counter">
            <CircularProgressWithLabel />
          </div>
        </>
      )}
    </>
  );
}

export default Quiz;
