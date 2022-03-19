import React, { useState } from "react";

import "./Score.scss";

import ShareModal from './ShareModal'

import { BiShareAlt } from "react-icons/bi";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function ButtonsResult() {
  const [show, setShow] = useState(false);

  console.log(show) 

  
  const closeModal = () => {
    setShow(false);
  }


  return (
    <div className="buttons-results">
      <Link to="/game">
        <button className="tryAgainButton">Play Again</button>
      </Link>
      <button className="shareButton" onClick={() => setShow(true)}>
        Share the mission
        <BiShareAlt />
        {show && (
          <ShareModal show={show} setShow={setShow} closeModal={closeModal} />
        )}
      </button>
    </div>
  );
}

export default ButtonsResult;
