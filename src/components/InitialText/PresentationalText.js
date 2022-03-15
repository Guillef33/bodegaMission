import React, { useContext } from "react";

import AppProvider, { AppContext } from "../../context/AppContext";

import alert from '../../assets/Vector.png'

import "./welcome.scss";

function PresentationalText() {
  const { showBeforeComponent, StartGame } = useContext(AppContext);

  return (
    <div className="presentation-container">
      <h1>Before you start</h1>
      <div className="grid-section">
        <div className="before-start-col">
          <h2>
            ​​Did you know that Spain has the largest vineyard surface in the
            world?
          </h2>
          <button className="playGameButton" onClick={(e) => StartGame(e)}>
            Play
          </button>
        </div>
        <div className="content-start-col">
          <p>
            Is the second in production, behind Italy, This is due, in part, to
            the very low yields and wide spacing of the old vines planted on the
            dry, infertile soil found in some of the Spanish wine regions. This
            is even more impressive if you consider that the country is largely
            made up of old mountains. There are many hidden valleys that offer
            an enormous wealth of terroirs, where Spanish winegrowers mainly
            work with the typical old 'bush vines' to better protect the grapes.
            Talking about grapes, did you know that Spain has more than 70
            autochthonous varieties?{" "}
          </p>
          <h4>
            We believe that Spain is the country with the greatest wealth of
            terroirs for making wine, the strongest identity and, paradoxically,
            the most undervalued production. So our path started to be traced:
            UNCOVER THE HIDDEN VALUE OF SPANISH WINE.
          </h4>
        </div>
      </div>
      <div>
        <img src={alert} alt="alert" />
        <p>
          Please open the bottle you have received & serve yourself a glass,
          it's going to be amazing, we know but we recommend to drink in
          moderation.
        </p>
      </div>
    </div>
  );
}

export default PresentationalText;
