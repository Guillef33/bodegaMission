import React from "react";

function Results(props) {
  return (
    <div className="question-content-wrapper">
      <h2>And the Answer Is:</h2>
      <h3>ALBARÍN</h3>
      <p>
        This grape variety is originally from Asturias, then expanded in
        Cantabria & Castilla y León. It almost disappeared until 10 years ago
        winegrowers began to replant it. You can still find vines that are over
        100 years old. It is sometimes confused with albariño gallego or albillo
        but is not actually related to them.{" "}
      </p>
      <p> Come & join us in the Prowein stand number XX</p>
      <button
        onClick={() => props.handleClick("form")}
        className="playGameButton"
      >
        Next
      </button>
    </div>
  );
}

export default Results;
