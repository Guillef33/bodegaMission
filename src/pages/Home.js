import React, {
  useState,
  useContext,
  useEffect,
  useParam,
  useLocation,
} from "react";

import AppProvider, { AppContext } from "../context/AppContext";

import Welcome from "../components/Welcome/Guests/Welcome";

import { useAnalytics } from "use-analytics";

import ReactGA from "react-ga";
import ReactGA4 from "react-ga4";


function Home() {
  const [timeIsUp, setTimeIsUp] = useState(false);

  // useEffect(() => {
  //   ReactGA.initialize("UA-228406673-1");
  //   ReactGA.pageview("/");
  // }, []);

    useEffect(() => {
      ReactGA4.initialize("G-8PBY6X4E0X");
      // ReactGA4.pageview("/caca");
      ReactGA4.send({ hitType: "pageview", page: "/home" });
    }, []);

  return (
    <div className="container">
      <Welcome type={"sin botella"} />
    </div>
  );
}

export default Home;
