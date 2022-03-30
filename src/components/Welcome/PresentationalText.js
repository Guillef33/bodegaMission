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
        </div>
        <div className="content-start-col">
          <p>
            We believe that Spain is the country with the greatest wealth of
            terroirs for making wine, the strongest identity and, paradoxically,
            the most undervalued production. <br />
          </p>
        </div>
        <Link to="/ready">
          <button
            className="playGameButton playGameButtonMobile"
          >
            Next
          </button>
        </Link>
      </div>
      <div className="bottom-section">
        <img src={alert} alt="alert" className="alert-image" />
        <p>BE CAREFUL: YOU HAVE 2 MINUTES TO COMPLETE THE MISSION.</p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default PresentationalText;
