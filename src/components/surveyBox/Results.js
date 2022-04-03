import React from "react";

function Results(props) {
  return (
    <div className="question-content-wrapper">
      <h2>Results Survey</h2>
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
