import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

import { ImCross } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Buttons from "../Buttons/Button";

import Score from "../score/Score";
import About from "../about/AboutUs";

import "./Quizz.scss";

import data from "../components/surveyBox/data";


function Survey() {
  const {
    resp,
    addResp,
    removeResp,
    showScore,
    // questions,
    currentQuestion,
    handleClose,
    pasarPregunta,
    volverPregunta,
  } = useContext(AppContext);

  const [answers, setAnswers] = useState([]);

  console.log(currentQuestion);

  //TODO: Este hangleOptionClick va a decidir si tenemos que agregar la respuesta o eliminarla
  const handleOptionClick = (e, newResp) => {
    console.log("hiceclick");
    addResp(newResp);
  };

  // Conexion a Firebase
  // Nueva coleccion

  // Crear un formulario con las preguntas
  // usar material UI para el formulario

  return (
    <>
      {showScore ? (
        <About />
      ) : (
        <div
          className="question-container"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(${data[currentQuestion].image})`,
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
              <span style={{ fontWeight: "bold" }}>
                {data[currentQuestion].id}
              </span>{" "}
              of 8
            </h2>
            <div className="question-section">
              <div className="question-count"></div>
              <div className="question-text">
                {data[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {data[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <Buttons
                    key={index}
                    resp={resp}
                    addResp={addResp}
                    removeResp={removeResp}
                    id={data[currentQuestion].id}
                    questionText={data[currentQuestion].questionText}
                    answerOption={answerOption}
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Survey;
