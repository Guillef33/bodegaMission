import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import AppProvider, { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import Box from "./pages/Box";
import Invitados from "./pages/Guests";
import PresentationalText from "./components/Welcome/PresentationalText";
import OutOfTime from "./components/outOfTime/OutOfTime";
import NotFound from "./pages/NotFound";
import CircularProgressBar from "./components/Counter/CircularProgressBar";
import CircularProgressWithLabel from "./components/Counter/MaterialProgress";
import Game from "./pages/Game";
import Score from "./components/score/Score";
import FormInvitados from "./components/Form/FormInvitados";
import Formik from "./components/Form/Formik";

import AboutUs from "./components/about/AboutUs";

import PresentationalBox from "./components/Welcome/PresentationBox";
import Yupform from "./components/Form/Yupform";

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

          {/*Pruebas*/}

          <Route path="/progress" element={<CircularProgressBar />} />
          <Route path="/material" element={<CircularProgressWithLabel />} />

          <Route path="/presentacion" element={<PresentationalText />} />
          <Route path="/presentacion-box" element={<PresentationalBox />} />

          {/* <Route path="/presentacionDos" element={<PresentationalText />} /> */}

          <Route path="/outoftime" element={<OutOfTime />} />
          <Route path="/score" element={<Score />} />
          <Route path="/form" element={<FormInvitados />} />
          <Route path="/formik" element={<Formik />} />
          <Route path="/yup" element={<Yupform />} />

          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
