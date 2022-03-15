import React, { useContext } from "react";

import AppProvider, { AppContext } from "../../context/AppContext";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


import "./initialtext.css";

import logo from "../../assets/LOGO3.png";


function Welcome() {
  

    const { showStartMission, showMission, showBefore, StartGame } =
      useContext(AppContext);
  return (
    <>
      {showStartMission ? (
        <div className="initial-text-container">
          <p>
            The mission you just signed for is to uncover what Spain has to
            offer.
            <br />
            <br />
            BE CAREFUL: YOU HAVE 90 SECS TO COMPLETE THE MISSION.
          </p>
          {/* <Link to> */}
          <button className="playGameButton" onClick={(e) => StartGame(e)}>
            Play
          </button>
          {/* </Link> */}
        </div>
      ) : (
        <div className="initial-text-container">
          {/* <img src={logo} alt="logo" /> */}
          <p>
            WELCOME TO THE MISSION BE CAREFUL: YOU HAVE 90 SECS TO COMPLETE THE
            MISSION.
          </p>
          {/* <Link to={}> */}
          <button className="playGameButton" onClick={(e) => showMission(e)}>
            Yes
          </button>
          {/* </Link> */}
        </div>
      )}
    </>
  );

}

export default Welcome;
