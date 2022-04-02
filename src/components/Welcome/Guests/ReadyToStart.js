import React from "react";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "../welcome.scss";

function ReadyToStart() {
  return (
    <div className="initial-text-container">
      <h2>YOU ARE ABOUT TO START THE MISSION</h2>
      <p>Are you ready?</p>
      <Link to="/game">
        <button className="playGameButton">Play</button>
      </Link>
    </div>
  );
}

export default ReadyToStart;
