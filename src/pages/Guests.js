import React, { useState, useContext, useEffect, useParam } from "react";

import AppProvider, { AppContext } from "../context/AppContext";


import ReactGA4 from "react-ga4";

import Yupform from "../components/Form/Yupform";

function Guests() {

      useEffect(() => {
        ReactGA4.initialize("G-8PBY6X4E0X");
        // ReactGA4.pageview("/caca");
        ReactGA4.send({ hitType: "pageview", page: "/guests" });
      }, []);
  return <Yupform />;
}

export default Guests;
