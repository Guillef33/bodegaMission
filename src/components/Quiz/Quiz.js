import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Buttons from "../Buttons/Button";

import Score from "../score/Score";
import About from "../about/AboutUs";

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
    console.log("hiceclick");
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
              <div className="question-fila-mobile">
                <button
                  className="arrow-forward arrow-mobile"
                  onClick={() => volverPregunta()}
                >
                  {" "}
                  <IoIosArrowBack />
                </button>
                <h2 className="question-number">
                  Question{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {questions[currentQuestion].id}
                  </span>{" "}
                  of 8
                </h2>
                <button
                  className="arrow-back arrow-mobile"
                  onClick={() => pasarPregunta()}
                >
                  {" "}
                  <IoIosArrowForward />
                </button>
              </div>
              <div className="question-section">
                <div className="question-count"></div>

                <div className="question-text">
                  {questions[currentQuestion].questionText}
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
