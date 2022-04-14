import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useHistory } from "react-router-dom";

import fondoVinedo from "../../assets/fondoVinedo.png";

import logoPNG from "../../assets/LogosPNGOk.png";
import InviteMail from "../score/InviteMail";

import "../about/AboutUs";
import "./results.scss";

const Results = () => {
  return (
    <>
      <div
        className="aboutUs-container"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${fondoVinedo})`,
        }}
      >
        <div className="aboutUs-wrapper">
          <div className="aboutUs-title-container">
            <img className="aboutUs-image" src={logoPNG} alt="logo" />
          </div>
          <div className="results-text-container">
            <h2 className="results-subtitle">And the answer is...</h2>
            <h2 className="results-title">Albarin</h2>
            <p className="results-text">
              This grape variety is originally from Asturias, then expanded in
              Cantabria & Castilla y León. It almost disappeared until 10 years
              ago winegrowers began to replant it. You can still find vines that
              are over 100 years old. It is sometimes confused with albariño
              gallego or albillo but is not actually related to them.
            </p>
            <InviteMail />
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
