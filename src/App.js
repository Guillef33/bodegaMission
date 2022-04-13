import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
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
import Survey from "./components/surveyBox/survey";
import Results from "./components/surveyBox/Results";

import SurveyJs from "./components/surveyBox/surveyJs";

import Input from './components/Rating/Input'
import FormContainer from "./components/surveyBox/FormContainer";


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
          <Route path="/ready-box" element={<ReadyToStartBox />} />

          {/* <Route path="/survey" element={<Survey />} /> */}
          {/* <Route path="/input" element={<Input />} /> */}
          <Route path="/survey" element={<FormContainer />} />


          <Route path="/results" element={<Results />} />

          

          <Route path="/progress" element={<CircularProgressBar />} />
          <Route path="/material" element={<CircularProgressWithLabel />} />

          <Route path="/presentacion" element={<PresentationalText />} />
          <Route path="/presentacion-box" element={<PresentationalBox />} />

          <Route path="/outoftime" element={<OutOfTime />} />
          <Route path="/score" element={<Score />} />
          <Route path="/yup" element={<Yupform />} />

          <Route path="/about" element={<AboutUs />} />

          {/* <Route path="/newform" element={<FormContainer />} /> */}
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
