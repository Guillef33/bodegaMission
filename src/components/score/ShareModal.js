import React, { useState } from "react";

import { WhatsappShareButton, WhatsappIcon } from "react-share";

import "./Score.scss";

function ShareModal({ show, setShow, closeModal }) {

  // if (!show) {
  //   return null;
  // }

  return (
    <div className="share-modal-container">
      <button
        style={{ fontSize: "50px", color: "black" }}
        onClick={() => setShow(false)}
      >
        X
      </button>

      <h2>Share this mission with a friend</h2>

      <div style={{ display: "flex" }}>
        <input value="https://prowein.raicesibericas.com/guests"></input>
        <button
          className="tryAgainButton"
          onClick={() =>
            navigator.clipboard.writeText(
              "https://prowein.raicesibericas.com/guests"
            )
          }
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default ShareModal;



      {
        /* <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton> */
      }

