import React, { useState, useContext, useEffect, useParam } from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import WelcomeBox from "../components/Welcome/Box/WelcomeBox";

  import ReactGA4 from "react-ga4";


function Box() {

  
   useEffect(() => {
     ReactGA4.initialize("G-6GXQ55LQ04");
     ReactGA4.send({ hitType: "pageview", page: "/game" });
   }, []);


  return (
    <div className="container">
      <WelcomeBox type={"con botella"} />
    </div>
  );
}

export default Box;
