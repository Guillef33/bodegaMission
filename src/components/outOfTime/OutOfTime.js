import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import { Link } from "react-router-dom";

import Player from "../audio/Player";

import './outOfTime.scss'

const OutOfTime = () => {
  const { restartGame } = useContext(AppContext);
  return (
    <>
      <Player url={undefined} />
      <div className="outOfTime-container">
        <h1 className="outOfTime-title"> Out of Time :( </h1>
        <h3 className="outOfTime-text"> No problem, you can try again!</h3>
        <div className="tryAgain-button-container">
          <Link to="/game">
            <button className="tryAgainButton" onClick={restartGame}>
              Try again
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OutOfTime;
