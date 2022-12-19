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
            <h2 className="results-subtitle">And the answer is:</h2>
            {/* <h2 className="results-title">Albarin</h2> */}
            <p className="results-text">
              Prieto Picudo is a rare, dark-skinned red wine grape variety grown
              predominantly in and around its homeland of León, northern Spain.
              The variety is used to create both light rosés and deeply
              pigmented reds, and can be found as a single-variety wine or in
              blends with Tempranillo or Mencia. <br></br>
              <br></br>Prieto Picudo grows best in difficult terrains, hot and
              dry being its preference as it has a high degree of drought
              resistance. <br></br>
              <br></br>A typical Prieto Picudo wine has moderate tannins,
              retains good acidity and may respond well to a judicious use of
              oak. The aromatic variety gives intense color to wine. Typical
              flavors include redcurrant, blackberry and licorice.
            </p>
            {/* <InviteMail /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
