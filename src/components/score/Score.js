import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import RaicesBack3 from "../../assets/back3.jpeg";

import ButtonsResult from "./ButtonsResult";

import "./Score.scss";

function Score() {
 
  const { questions, score, restartGame } = useContext(AppContext);

  return (
    <>
      {score >= 7 ? (
        <div className="score-section">
          <h2 className="score-title">You scored</h2>
          <h3 className="score-numbers">
            {score}/ {questions.length}
          </h3>
          <div className="text-result-wrapper">
            <p className="score-result-title">
              You are a trully Spanish wine expert
            </p>
            <p className="score-result-text">
              But we are sure that there is still much to learn! Every day we
              will be uncovering a new autochthonous variety or an unknown DO.
              Come & join us in the Prowein stand number XX
            </p>
          </div>
          <ButtonsResult />
        </div>
      ) : (
        <div className="score-section">
          <h2 className="score-title">You scored</h2>
          <h3 className="score-numbers">
            {score}/{questions.length}
          </h3>
          <div className="text-result-wrapper">
            <p className="score-result-title">There is still much to learn!</p>
            <p className="score-result-text">
              90% of the wine connoisseurs confess that they have never heard of
              some of the Spanish varieties mentioned. Come & join us in the
              Prowein stand number XX{" "}
            </p>
          </div>
          <ButtonsResult />
        </div>
      )}
    </>
  );
}

export default Score;
