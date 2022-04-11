import React from "react";

import "./survey.css";

function Results(props) {
  return (
    <div className="question-content-wrapper">
      {/* Aquí se aplicaría lo de las dependencias: es decir si el usuario eligió:
      GARNACHA BLANCA, ALBARIÑO y GODELLO como las 3 opciones de variedad, la
      pantalla debería mostrarle esas 3 y que elija UNA de esas 3. */}

      <h2 className="results-title">And the Answer Is:</h2>
      <h3 className="results-grape">ALBARÍN</h3>
      <p className="result-text">
        This grape variety is originally from Asturias, then expanded in
        Cantabria & Castilla y León. It almost disappeared until 10 years ago
        winegrowers began to replant it. You can still find vines that are over
        100 years old. It is sometimes confused with albariño gallego or albillo
        but is not actually related to them.{" "}
      </p>
      <p className="results-text">
        {" "}
        Come & join us in Prowein: HALL 14 STAND A10
      </p>
    </div>
  );
}

export default Results;
