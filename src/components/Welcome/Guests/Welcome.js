import React, { useContext } from "react";

import AppProvider, { AppContext } from "../../../context/AppContext";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import fondoVinedo from "../../../assets/fondoVinedo.png";

import "../welcome.scss";

import PresentationalText from "./PresentationalText";

function Welcome({ type }) {
  const { showStartMission, showMission, showBefore, StartGame } =
    useContext(AppContext);
  return (
    <>
      <div
        className="welcome-container"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${fondoVinedo})`,
        }}
      >
        <PresentationalText />
      </div>
    </>
  );
}

export default Welcome;
