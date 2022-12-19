import React from "react";

import fondoVinedo from "../../../assets/fondoVinedo.png";

import "../welcome.scss";

import PresentationBox from "./PresentationBox";

function Welcome({ type }) {
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
        <PresentationBox />
      </div>
    </>
  );
}

export default Welcome;
