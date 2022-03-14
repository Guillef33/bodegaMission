import React, { useContext } from 'react';

import { AppContext } from "../../context/AppContext";

import RaicesBack3 from "../../assets/back3.jpeg";

import { WhatsappShareButton, WhatsappIcon } from "react-share";

function Score() {

  const shareUrl = "https://api.whatsapp.com/send?phone=1167062068&text=Ven%20a%20jugar%20con%20Bodega%20Raices.%20Cuanto%20sabes%20de%20los%20vinos%20espanoles"

    const {
    questions,
    score,
    restartGame
  } = useContext(AppContext);

  return (
    <div className="score-section">
      <img src={RaicesBack3} alt="sucess-pic" />
      <h2>
        You scored {score} out of {questions.length}
      </h2>
      <p>
        SHOCKED WITH THE RESULTS? Congratulations, there is still much to learn!
        <br />
        Do not worry. 90% of the wine connoisseurs confess that they have never
        heard of some of the Spanish varieties mentioned. <br />
        Come & join us in the Prowein stand number XX of RAICESIBERICAS in HALL
        14, every day we will be uncovering a new autochthonous variety or an
        unknown DO.
      </p>

      {/* Aca deberia ir el mensaje de Perdiste, se te acbo el t */}

      <button onClick={(e) => restartGame(e)}>Play Again</button>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </div>
  );
}

export default Score