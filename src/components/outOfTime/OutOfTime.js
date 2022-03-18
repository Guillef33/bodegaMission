import React, { useContext } from "react";
// import AppProvider, { AppContext } from "../../context/AppContext";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Player from "../audio/Player";

const OutOfTime = () => {
  // const { restartGame } = useContext(AppContext);
  return (
    <>
      <Player url={undefined} />
      <div className="outOfTime-container">
        <h1 className="outOfTime-title"> Out of Time :( </h1>
        <h3 className="outOfTime-text"> No problem, you can try again!</h3>
        <div className="tryAgain-button-container">
          <Link to="/game">
          <button
            className="tryAgainButton"
              >
              Try again
            </button>
            </Link>
          {/* <button
            className="tryAgainButton"
            onClick={}
            // onClick={() => console.log("restartGame")}
            //  onClick={(e) => restartGame(e)}
             >
            Try Again
          </button> */}
        </div>
      </div>
    </>
  );
};

export default OutOfTime;
