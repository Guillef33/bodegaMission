import React, { useState, useContext, useEffect, useParam } from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import WelcomeBox from "../components/Welcome/Box/WelcomeBox";

  import ReactGA4 from "react-ga4";


function Box() {


  return (
    <div className="container">
      <WelcomeBox type={"con botella"} />
    </div>
  );
}

export default Box;
