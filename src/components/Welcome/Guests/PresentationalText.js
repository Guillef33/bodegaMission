import React, { useContext } from "react";

import { Link } from "react-router-dom";

import alert from "../../../assets/Vector.png";

import "../welcome.scss";

function PresentationalText() {

  return (
    <div className="presentation-container">
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
            So our path started to be traced: uncover the hidden value of
            Spanish wine. And this is the mission you just signed for: uncover
            what Spain has to offer. Follow the instructions and good luck!
          </p>
        </div>
        <Link to="/game">
          <button className="playGameButton playGameButtonMobile">Next</button>
        </Link>
      </div>
      <div className="bottom-section">
        <img src={alert} alt="alert" className="alert-image" />
        <p>BE CAREFUL: YOU HAVE 2 MINUTES TO COMPLETE THE MISSION.</p>
      </div>
    </div>
  );
}

export default PresentationalText;
