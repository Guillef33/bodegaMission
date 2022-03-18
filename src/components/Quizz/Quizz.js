import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

import { ImCross } from "react-icons/im";
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from "react-icons/io";


import Score from "../score/Score";

import "./Quizz.scss";

function Quizz() {
  const {
    addResp,
    showScore,
    questions,
    currentQuestion,
    score,
    restartGame,
    handleAnswerOptionClick,
    handleClose,
    pasarPregunta,
    omitirPregunta,
    volverPregunta,
  } = useContext(AppContext);

  const [answers, setAnswers] = useState([]);

  //TODO: Este hangleOptionClick va a decidir si tenemos que agregar la respuesta o eliminarla
  const handleOptionClick = (e,newResp) => {
    addResp(newResp);
  };

  return (
    <>
      {showScore ? (
        <Score />
      ) : (
        <div
          className="question-container"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(${questions[currentQuestion].image})`,
          }}
        >
          <div className="buttons-indicators">
            <button className="arrow-forward" onClick={() => volverPregunta()}>
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
            <button className="closeBtn" onClick={handleClose}>
              {/* <ImCross /> */}
            </button>
            <h2 className="question-number">
              Question{" "}
              <span style={{ fontWeight: "bold" } }>
                {questions[currentQuestion].id}
              </span>{" "}
              of 8
            </h2>
            <div className="question-section">
              <div className="question-count"></div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <>
                  <button
                    className="playGameButton"
                    onClick={(e) => {
                      handleOptionClick(e, {
                        id: questions[currentQuestion].id,
                        questionText: questions[currentQuestion].questionText,
                        answerOption: [answerOption],
                      });
                    }}
                  >
                    {answerOption.answerText}
                  </button>
                </>
              ))}
            </div>

            {/* 
            <div className="button-wrapper">
              {/* <button
                className="navigationButtons"
                onClick={() => omitirPregunta()}
              >
                Omitir
              </button> 
              <button
                className="playGameButton"
                onClick={() => pasarPregunta()}
              >
                Next
              </button>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Quizz;
