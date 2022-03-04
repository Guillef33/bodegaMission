import React, { useContext } from "react";

import AppProvider, { AppContext } from "../../context/AppContext";


import "./initialtext.css";

import logo from "../../assets/LOGO3.png";


function InitialText() {

    const {
      StartGame,
    } = useContext(AppContext);
  return (
    <div className="initial-text-container">
      <img src={logo} alt="logo" />
      <p>
        THE MISSION YOU JUST SIGNED FOR IS TO UNCOVER WHAT SPAIN HAS TO OFFER.
        <br />
        <br />
        BE CAREFUL: YOU HAVE 90 SECS TO COMPLETE THE MISSION.
      </p>
      <button className="playGameButton" onClick={StartGame}>
        Start
      </button>
    </div>
  );
}

export default InitialText;
