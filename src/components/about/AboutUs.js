import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import fondoVinedo from "../../assets/fondoVinedo.png";
// import vector from "../../assets/vidProv.png";
import logo from "../../assets/logoConVid.jpg";
import "./About.scss";

const AboutUs = () => {
  const [show, setShow] = useState(false);
  const delay = 12;
  let navigate = useNavigate();
  useEffect(() => {
    Swal.fire(
      "Thanks for playing.",
      "Get to know us, while we calculate your results",
      "info"
    );
    let timer1 = setTimeout(() => setShow(true), delay * 1000);

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
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
        <div className="aboutUs-div">
          <div className="aboutUs-title-container">
            <h2 className="aboutUs-title">About Us. </h2>
            {/* <div className="aboutUs-mid"></div>
            <img className="aboutUs-image-vid" src={vector} alt="logo" /> */}
            <img className="aboutUs-image" src={logo} alt="logo" />
          </div>
          <div>
            <p className="aboutUs-text">
              We started during a time of crisis… everything that could have
              gone wrong, did! <br />
              <br />
              Yet a single belief has united us today, Spain is the country with
              the greatest wealth of terroirs for making wine, the strongest
              identity and, paradoxically, the most undervalued production. So
              our path started to be traced: we want to show to everyone the
              hidden wonder of spanish wine. <br />
              <br />
              <strong>Mark Schiettekat.</strong>
              <br /> Owner.
            </p>
            <div className="aboutUs-loader">
              {!show ? (
                <p>
                  Calculating your results
                  <br /> Please wait...
                </p>
              ) : (
                <button
                  className="getResultButton"
                  onClick={() => navigate("/")}
                >
                  Get Results
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
