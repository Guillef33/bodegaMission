import React, { useContext } from 'react';

import { AppContext } from "../../context/AppContext";

function Score() {

    const {
    questions,
    score,
    restartGame
  } = useContext(AppContext);

  return (
    <div className="score-section">
      <h2>
        You scored {score} out of {questions.length}
      </h2>
      <p>
        SHOCKED WITH THE RESULTS? Congratulations, there is still much to learn!{" "}
        <br />
        Do not worry. 90% of the wine connoisseurs confess that they have never
        heard of some of the Spanish varieties mentioned. <br />
        Come & join us in the Prowein stand number XX of RAICESIBERICAS in HALL
        14, every day we will be uncovering a new autochthonous variety or an
        unknown DO.
      </p>

      {/* Aca deberia ir el mensaje de Perdiste, se te acbo el t */}

      <button onClick={(e) => restartGame(e)}>Play Again</button>
    </div>
  );
}

export default Score