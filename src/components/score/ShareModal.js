import React, { useState } from "react";

import { WhatsappShareButton, WhatsappIcon } from "react-share";

import "./Score.scss";

function ShareModal({ show, setShow }) {
  return (
    <div className="share-modal-container">
      <button className="close-modal" onClick={ () => setShow(false)}>
        X
      </button>

      <h2>Share this mission with a friend</h2>

      <div className="modal-container-buttons">
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
