import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import ButtonsResult from "./ButtonsResult";

import raicesLogo from "../../assets/raices-ibericas.png";

import "./Score.scss";

function Score() {
  const { questions, score } = useContext(AppContext);

  return (
    <>
      {score >= 7 ? (
        <div className="score-section">
          <img
            src={raicesLogo}
            alt="logo-raices-ibericas"
            className="score-raices-logo"
          />
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
            </p>
            <p className="score-result-text">
              Come & join us in Prowein: HALL 14 STAND A10
            </p>
          </div>
          <ButtonsResult />
        </div>
      ) : (
        <div className="score-section">
          <img
            src={raicesLogo}
            alt="logo-raices-ibericas"
            className="score-raices-logo"
          />

          <h2 className="score-title">You scored</h2>
          <h3 className="score-numbers">
            {score}/{questions.length}
          </h3>
          <div className="text-result-wrapper">
            <p className="score-result-title">There is still much to learn!</p>
            <p className="score-result-text">
              90% of the wine connoisseurs confess that they have never heard{" "}
              <br /> of some of the Spanish varieties mentioned.
            </p>
            <p className="score-result-text">
              Come & join us in Prowein: HALL 14 STAND A10
            </p>
          </div>
          <ButtonsResult />
        </div>
      )}
    </>
  );
}

export default Score;
