import React from "react";
import fondoVinedo from "../../assets/fondoVinedo.png";
// import vector from "../../assets/vidProv.png";
import logo from "../../assets/logoConVid.jpg";

const AboutUs = () => {
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
