import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";
import "./Score.scss";
import ShareModal from "./ShareModal";
import { BiShareAlt } from "react-icons/bi";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function ButtonsResult() {
  const [show, setShow] = useState(false);
<<<<<<< HEAD

  console.log(show) 

  
  const closeModal = () => {
    setShow(false);
  }

=======
  const { setShowScore } = useContext(AppContext);
  console.log(window.location.href);
  console.log(show);
>>>>>>> 364cd3650ea0471ff1dfe53424d7f2f82a8f6a6c

  return (
    <div className="buttons-results">
      <Link to="/game">
        <button className="tryAgainButton" onClick={setShowScore(false)}>
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
<<<<<<< HEAD
=======

      {/* <ShareModal show={show} /> */}
>>>>>>> 364cd3650ea0471ff1dfe53424d7f2f82a8f6a6c
    </div>
  );
}

export default ButtonsResult;
