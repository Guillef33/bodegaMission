import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

import { ImCross } from "react-icons/im";

import "./Quizz.css";

function Quizz() {
  const {
    showScore,
    questions,
    currentQuestion,
    score,
    restartGame,
    handleAnswerOptionClick,
    handleClose,
    pasarPregunta,
  } = useContext(AppContext);

  const [answers, setAnswers] = useState([]);

  const handleOptionClick = ( resp ) => {

    setAnswers( ...answers, resp );

  }

  return (
    <>
      {showScore ? (
        <div className="score-section">
          <h2>
            You scored {score} out of {questions.length}
          </h2>
          {/* {losing 

          } */}
          <p>
            SHOCKED WITH THE RESULTS? Congratulations, there is still much to
            learn! <br />
            Do not worry. 90% of the wine connoisseurs confess that they have
            never heard of some of the Spanish varieties mentioned. <br />
            Come & join us in the Prowein stand number XX of RAICESIBERICAS in
            HALL 14, every day we will be uncovering a new autochthonous variety
            or an unknown DO.
          </p>

          {/* Aca deberia ir el mensaje de Perdiste, se te acbo el t */}

          <button onClick={(e) => restartGame(e)}>Play Again</button>
        </div>
      ) : (
        <div className="question-container">
          <button className="closeBtn" onClick={handleClose}>
            <ImCross />
          </button>
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
                  onClick={
                    () =>
                      // debe enviar la respuesta y añadirla al answers:  setAnswers( answer )
                      handleAnswerOptionClick(answerOption.isCorrect)
                    // handleOptionClick( answerOption )
                  }
                >
                  {answerOption.answerText}
                </button>
              </>
            ))}
          </div>
          <button
            className="nextButton"
            //  sencAnswers(answers)    (  const [answers, setAnswers] = useState([]) )
            onClick={() => pasarPregunta()}
            // onClick={() => sendQuestion( answers )}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default Quizz;

