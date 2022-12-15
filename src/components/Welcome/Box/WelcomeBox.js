import React from "react";

import fondoVinedo from "../../../assets/fondoVinedo.png";
import equipoVinedo from "../../../assets/RaicesIbericasEquipo.jpg";

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
          backgroundImage: `url(${equipoVinedo})`,
        }}
      >
        <PresentationBox />
      </div>
    </>
  );
}

export default Welcome;
