import React, { useContext } from "react";

import AppProvider, { AppContext } from "../../context/AppContext";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import alert from "../../assets/Vector.png";

import "./welcome.scss";

function PresentationalText() {
  const { showBeforeComponent, StartGame } = useContext(AppContext);

  return (
    <div className="presentation-container">
      {/* <div className="content-section"> */}
        <h1>Before you start</h1>
        <div className="grid-section">
          <div className="before-start-col">
            <h2>
              ​​Did you know that Spain has the largest vineyard surface in the
              world with more than 70 autochthonous varieties?
            </h2>
            <Link to="/game">
              <button
                className="playGameButton playGameButtonMobile"
                // onClick={(e) => StartGame(e)}
              >
                Play
              </button>
            </Link>
          </div>
          <div className="content-start-col">
            <p>
              We believe that Spain is the country with the greatest wealth of
              terroirs for making wine, the strongest identity and,
              paradoxically, the most undervalued production. <br />
              <br />
              So our path started to be traced: uncover the hidden value of
              Spanish wine. And this is the mission you just signed for: uncover
              what Spain has to offer. Follow the instructions and good luck!
            </p>
          </div>
        </div>
        <div className="bottom-section">
          <img src={alert} alt="alert" className="alert-image" />
          <p>
            Please open the bottle you have received & serve yourself a glass,
            it's going to be amazing, we know but we recommend to drink in
            moderation.
          </p>
        </div>
      {/* </div> */}
    </div>
  );
}

export default PresentationalText;
