import React, { useState, useContext, useEffect, useParam } from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import Welcome from "../components/Welcome/Guests/Welcome";

function Home() {
  const [timeIsUp, setTimeIsUp] = useState(false);

  return (
    <div className="container">
      <Welcome type={"sin botella"} />
    </div>
  );
}

export default Home;
