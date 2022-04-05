import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";
import "./Score.scss";
import ShareModal from "./ShareModal";
import { BiShareAlt } from "react-icons/bi";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Swal from "sweetalert2";

function ButtonsResult() {
  const [show, setShow] = useState(false);

  const { restartGame } = useContext(AppContext);

  const siteUrl = "https://prowein.raicesibericas.com/guests";

  function copyLink() {
    return navigator.clipboard.writeText(siteUrl);
  }

  function showSwal() {
    // Swal.fire({
    //   position: "top-end",
    //   title: "Share with a friend",
    //   input: "text",
    //   inputValue: siteUrl,
    //   html: `
    //   <button class="tryAgainButton" onclick={copyLink}>Copy</button>`,

    // });
    Swal.fire({
      title: "Share with a friend",
      text: "https://prowein.raicesibericas.com/guests",
      icon: "info",
      confirmButtonText: "Copy URL",
      // denyButtonText: "Cancel",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Copied!", "", "success");
        return navigator.clipboard.writeText(siteUrl);
      }
    });
  }

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
      </button>
      {show
        ? showSwal()
        : //  <ShareModal show={show} setShow={setShow} />
          " "}
    </div>
  );
}

export default ButtonsResult;
