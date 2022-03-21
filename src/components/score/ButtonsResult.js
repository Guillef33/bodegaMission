import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";
import "./Score.scss";
import ShareModal from "./ShareModal";
import { BiShareAlt } from "react-icons/bi";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function ButtonsResult() {
  const [show, setShow] = useState(false);

  console.log(show);

  const closeModal = () => {
    setShow(false);
  };

  const { restartGame } = useContext(AppContext);
  console.log(window.location.href);
  console.log(show);

  return (
    <div className="buttons-results">
      <Link to="/game">
        <button className="tryAgainButton" onClick={restartGame}>
          Play Again
        </button>
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
