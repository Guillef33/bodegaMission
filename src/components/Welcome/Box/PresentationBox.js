import React, { useContext } from "react";

import AppProvider, { AppContext } from "../../../context/AppContext";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import alert from "../../../assets/Vector.png";
import logoRaices from "../../../assets/BodegaRaicesBlanco-01.png";

import "../welcome.scss";

function PresentationalText() {
  return (
    <div className="presentation-container">
      <h1>Welcome!</h1>
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
        <Link to="/survey">
          <button className="playGameButton">JOIN THE MISSION</button>
        </Link>
      </div>
      <div className="bottom-section">
        <div className="bottom-section-text">
          <img src={alert} alt="alert" className="alert-image" />
          <p>
            PLEASE OPEN THE BOTTLE YOU HAVE RECEIVED & SERVE YOURSELF A GLASS.
            IT'S GOING TO BE AMAZING, WE KNOW BUT WE RECOMMEND TO DRINK IN
            MODERATION.
          </p>
        </div>
        <div className="bottom-section-logo">
          <img src={logoRaices} alt="logo-raices" className="logo-image" />
        </div>
      </div>
    </div>
  );
}

export default PresentationalText;
