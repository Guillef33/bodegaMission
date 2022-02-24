import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

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
            X
          </button>
          <div className="question-section">
            <div className="question-count">
              
            </div>
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
                  onClick={() =>
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

              {
                /* Cuando viene un questions[currentQuestion] que tenga mas de 1
              
              isCorrect Si esto es true, setScore 1 ( y setScore x 5 ) 
              
              Funcion
              groupBy para ordenar el array que recibimos y preguntar por cierta
              condicion Revisar reduce GroupBy va a retornar algo: podes pedirle
              que retorne todos los objetos que cumpla la condicion, o que
              retorne el conteo y ahi elegir que usar para sumar 

              Y luego validar que para que setScore sume + 1, debemos validar que todas los clicks hayan sido correctos
              
              Revisar /
              https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects */
              }
