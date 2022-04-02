import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
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

import PresentationalBox from "./components/Welcome/Box/PresentationBox";
import Yupform from "./components/Form/Yupform";
import Survey from "./components/surveyBox/survey";
// Screens
import Screen1 from "./components/surveyBox/Screen1";
import Screen2 from "./components/surveyBox/Screen2";
import Screen3 from "./components/surveyBox/Screen3";
import Screen4 from "./components/surveyBox/Screen4";

export default function App() {
  return (
    <AppProvider value={{ AppContext }}>
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
          <Route path="/survey" element={<Survey />} />

          <Route path="/progress" element={<CircularProgressBar />} />
          <Route path="/material" element={<CircularProgressWithLabel />} />

          <Route path="/presentacion" element={<PresentationalText />} />
          <Route path="/presentacion-box" element={<PresentationalBox />} />

          <Route path="/outoftime" element={<OutOfTime />} />
          <Route path="/score" element={<Score />} />
          <Route path="/yup" element={<Yupform />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/screen1" element={<Screen1 />} />
          <Route path="/screen2" element={<Screen2 />} />
          <Route path="/screen3" element={<Screen3 />} />
          <Route path="/screen4" element={<Screen4 />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
