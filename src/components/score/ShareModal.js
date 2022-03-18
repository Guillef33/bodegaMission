import React from "react";

import { WhatsappShareButton, WhatsappIcon } from "react-share";

import './Score.scss';

function ShareModal(show) {
  if (!show) {
    return null;
  }

  const shareUrl =
    "https://api.whatsapp.com/send?phone=1167062068&text=Ven%20a%20jugar%20con%20Bodega%20Raices.%20Cuanto%20sabes%20de%20los%20vinos%20espanoles";

  return (
    <div className="share-modal-container">
    <h2>Compate por WhatsApp con tus amigos</h2>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </div>
  );
}

export default ShareModal;
