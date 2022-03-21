import React, { useContext } from "react";

import AppProvider, { AppContext } from "../../context/AppContext";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import fondoVinedo from "../../assets/fondoVinedo.png";

import "./welcome.scss";

import logo from "../../assets/LOGO3.png";

function Welcome({ type }) {
  const { showStartMission, showMission, showBefore, StartGame } =
    useContext(AppContext);
  return (
    <>
      {showStartMission ? (
        <div className="initial-text-container">
          <h2>
            The mission you just signed for is to uncover what Spain has to
            offer.
          </h2>
          <p>
            {" "}
            <span className="bold-text">BE CAREFUL:</span> YOU HAVE{" "}
            <span className="bold-text">90 SECS</span> TO COMPLETE THE MISSION.
          </p>
          <Link to="/presentacion">
            <button className="playGameButton">
              Play
            </button>
          </Link>
          {/* </Link> */}
        </div>
      ) : (
        <div
          className="welcome-container"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `url(${fondoVinedo})`,
          }}
        >
          <h2>WELCOME TO THE MISSION </h2>
          <p>Are you ready?</p>
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
