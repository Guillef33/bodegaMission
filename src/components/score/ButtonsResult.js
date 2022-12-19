import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import "./Score.scss";
import { BiShareAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

function ButtonsResult() {
  const { restartGame } = useContext(AppContext);
  const siteUrl = "https://prowein.raicesibericas.com/guests";

  const showSwal = () => {
    Swal.fire({
      title: "Share with a friend",
      text: "https://prowein.raicesibericas.com/guests",
      icon: "info",
      confirmButtonText: "Copy URL",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Copied!", "", "success");
        return navigator.clipboard.writeText(siteUrl);
      }
    });
  };

  return (
    <div className="buttons-results">
      <Link to="/game">
        <button className="tryAgainButton" onClick={restartGame}>
          Play Again
        </button>
      </Link>
      <button className="shareButton" onClick={showSwal}>
        Share the mission
        <BiShareAlt />
      </button>
    </div>
  );
}

export default ButtonsResult;
