import React from "react";
// import AppProvider, { AppContext } from "../../context/AppContext";
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
          <button
            className="tryAgainButton"
            onClick={() => console.log("restartGame")}
          >
            Try Again
          </button>
        </div>
      </div>
    </>
  );
};

export default OutOfTime;
