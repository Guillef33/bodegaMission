import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import AppProvider, { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import Box from "./pages/Box";
import Invitados from "./pages/Invitados";

import PresentationalText from "./components/InitialText/PresentationalText";
import OutOfTime from "./components/outOfTime/OutOfTime";
import NotFound from "./pages/NotFound";
import CircularProgressBar from "./components/Counter/CircularProgressBar";
import CircularProgressWithLabel from "./components/Counter/MaterialProgress";


export default function App() {
  return (
    <AppProvider value={{ AppContext }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/box" element={<Box />} />
          <Route path="/invitados" element={<Invitados />} />

          <Route path="/progress" element={<CircularProgressBar />} />
          <Route path="/material" element={<CircularProgressWithLabel />} />
          <Route path="/presentacion" element={<PresentationalText />} />
          <Route path="/outoftime" element={<OutOfTime />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
