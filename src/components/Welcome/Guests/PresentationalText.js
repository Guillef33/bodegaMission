import React, { useContext } from "react";

import { Link } from "react-router-dom";

import alert from "../../../assets/Vector.png";

import "../welcome.scss";

function PresentationalText() {
  return (
    <div className="presentation-container">
      <h1>You are about to join a mission</h1>
      <div className="grid-section">
        <div className="before-start-col">
          <h2>
            Did you know that Spain has the largest vineyard surface area in the
            world and has more than 70 autochthonous grape varieties that are
            largely unknown?
          </h2>
        </div>
        <div className="content-start-col">
          <p>
            Our path became clear: to uncover the hidden value of Spanish wine.
          </p>
          <p>This is the mission you just signed up for.</p>
          <p>Follow the instructions.</p>
          <p>Good luck!</p>
        </div>
        <Link to="/game">
          <button className="playGameButton playGameButtonMobile">
            JOIN THE MISSION
          </button>
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
