import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

import { ImCross } from "react-icons/im";

import Score from '../score/Score';

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

  const handleOptionClick = (resp) => {
    setAnswers(...answers, resp);
  };

  return (
    <>
      {showScore ? (
        <Score />

      ) : (
        <div className="question-container">
          <button className="closeBtn" onClick={handleClose}>
            <ImCross />
          </button>
          <h2>Question nro:{questions[currentQuestion].id}</h2>

          <div className="question-section">
            <div className="question-count"></div>
            <img
              className="question-image"
              src={questions[currentQuestion].image}
              alt="images"
            />

            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <>
                <button
                  className="playGameButton"
                  onClick={() => {
                    addResp({
                      id: questions[currentQuestion].id,
                      questionText: questions[currentQuestion].questionText,
                      answerOption,
                    });
                  }}
                >
                  {answerOption.answerText}
                </button>
              </>
            ))}
          </div>
          <div className="button-wrapper">
            {/* <button
              className="navigationButtons"
              onClick={() => volverPregunta()}
            >
              Back
            </button> */}
            <button
              className="navigationButtons"
              onClick={() => omitirPregunta()}
            >
              Omitir
            </button>
            <button
              className="navigationButtons"
              onClick={() => pasarPregunta()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Quizz;
