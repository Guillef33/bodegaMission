import React, { useState, useContext, useEffect, useParam } from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import Yupform from "../components/Form/Yupform";

function Guests() {
  return <Yupform />;
}

export default Guests;
