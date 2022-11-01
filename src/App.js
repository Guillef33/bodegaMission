import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link, useLocation} from "react-router-dom";
import AppProvider, { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import Box from "./pages/Box";
import Invitados from "./pages/Guests";
import PresentationalText from "./components/Welcome/Guests/PresentationalText";
import OutOfTime from "./components/outOfTime/OutOfTime";
import NotFound from "./pages/NotFound";
import CircularProgressBar from "./components/Counter/CircularProgressBar";
import CircularProgressWithLabel from "./components/Counter/MaterialProgress";
import Game from "./pages/Game";
import Score from "./components/score/Score";

import AboutUs from "./components/about/AboutUs";
import ReadyToStart from "./components/Welcome/Guests/ReadyToStart";
import ReadyToStartBox from "./components/Welcome/Box/ReadyToStartBox";

import PresentationalBox from "./components/Welcome/Box/PresentationBox";
import Yupform from "./components/Form/Yupform";
import Results from "./components/surveyBox/Results";

import FormContainer from "./components/surveyBox/FormContainer";
import SurveyForm from "./components/Form/SurveyForm";

import googleAnalytics from "@analytics/google-analytics";
import Analytics from "analytics";

import { AnalyticsProvider, useAnalytics } from "use-analytics";

import ReactGA from 'react-ga';



const myPlugin = {
  name: "my-custom-plugin",
  page: ({ payload }) => {
    console.log("page view fired", payload);
  },
  track: ({ payload }) => {
    console.log("track event", payload);
  },
};

const analytics = Analytics({
  app: "awersome",
  plugins: [
    myPlugin,
    googleAnalytics({
      trackingId: "G-6GXQ55LQ04",
    }),
  ],
});

console.log("analytics", analytics);

export default function App() {

  return (
    <AppProvider value={{ AppContext }}>
      {/* <AnalyticsProvider instance={analytics}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/box" element={<Box />} />
            <Route path="/guests" element={<Invitados />} />

            {/*Rutas propuestas*/}
            <Route path="/game" element={<Game />} />

            {/*Pantalla 2*/}
            <Route path="/ready" element={<ReadyToStart />} />
            <Route path="/ready-box" element={<ReadyToStartBox />} />

            <Route path="/survey" element={<FormContainer />} />
            <Route path="/surveyForm" element={<SurveyForm />} />

            <Route path="/results" element={<Results />} />

            <Route path="/progress" element={<CircularProgressBar />} />
            <Route path="/material" element={<CircularProgressWithLabel />} />

            <Route path="/presentacion" element={<PresentationalText />} />
            <Route path="/presentacion-box" element={<PresentationalBox />} />

            <Route path="/outoftime" element={<OutOfTime />} />
            <Route path="/score" element={<Score />} />
            <Route path="/yup" element={<Yupform />} />

            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      {/* </AnalyticsProvider> */}
    </AppProvider>
  );
}
