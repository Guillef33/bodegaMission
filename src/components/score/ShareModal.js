import React, { useState } from "react";

import { WhatsappShareButton, WhatsappIcon } from "react-share";

import "./Score.scss";

function ShareModal({ show, setShow, closeModal }) {

  console.log(show);

  const shareUrl =
    "https://api.whatsapp.com/send?phone=1167062068&text=Ven%20a%20jugar%20con%20Bodega%20Raices.%20Cuanto%20sabes%20de%20los%20vinos%20espanoles";

  return (
    <div className="share-modal-container">
      <h2>Compate por WhatsApp con tus amigos</h2>
      <button
        style={{ fontSize: "50px", color: "black" }}
        onClick={() => setShow(false)}
      >
        X
      </button>

      <div style={{ display: "flex" }}>
        <input value="https://prowein.raicesibericas.com/"></input>
        <button
          className="tryAgainButton"
          onClick={() =>
            navigator.clipboard.writeText("https://prowein.raicesibericas.com/")
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
