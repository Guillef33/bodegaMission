import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import fondoVinedo from "../../assets/fondoVinedo.png";

import logoPNG from "../../assets/LogosPNGOk.png";
import GameForm from "../Form/GameForm";

import "./About.scss";

const AboutUs = () => {
  const [show, setShow] = useState(false);
  const delay = 4;
  let navigate = useNavigate();
  useEffect(() => {
    Swal.fire({
      title: "Thanks for playing.",
      text: "Get to know us, while we calculate your results",
      customClass: "button-about",
    });
    let timer1 = setTimeout(() => setShow(true), delay * 1000);

    // this will clear Timeout
    return () => {
      clearTimeout(timer1);
    };
  }, []);

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
            <h2 className="aboutUs-title">About Us</h2>
            <img className="aboutUs-image" src={logoPNG} alt="logo" />
          </div>
          <div className="aboutUs-text-container">
            <p className="aboutUs-text">
              We started during a time of crisis… everything that could have
              gone wrong, did! <br />
              <br />
              Yet a single belief has united us today, Spain is the country with
              the greatest wealth of terroirs for making wine, the strongest
              identity and, paradoxically, the most undervalued production. Our
              path became clear: we want to show to everyone the hidden wonder
              of Spanish wine.
              <br />
              <br />
              <strong>Mark Schiettekat.</strong>
              <br /> Owner.
            </p>
          </div>
        </div>
        <div className="aboutUs-loader">
          {!show ? (
            <p>
              Calculating your results
              <br /> Please wait...
            </p>
          ) : (
            <>
              <h3 className="form-text">
                Please share your email with us to see your results
              </h3>
              <GameForm />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
