import React, { useState } from "react";

import "./Score.scss";

import ShareModal from './ShareModal'

import { BiShareAlt } from "react-icons/bi";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function ButtonsResult() {
  const [show, setShow] = useState(false);

  console.log(show)

  return (
    <div className="buttons-results">
      <Link to="/game">
        <button className="tryAgainButton">Play Again</button>
      </Link>
      <button className="shareButton" onClick={() => setShow(true)}>
        Share the mission
        <BiShareAlt />
      </button>

      <ShareModal show={show} />
    </div>
  );
}

export default ButtonsResult;
