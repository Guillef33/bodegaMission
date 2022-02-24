import React, { useState, useEffect } from "react";

function NewCounter() {
  const NoventaSegundos = 10;
  const [segundos, setSegundos] = useState(NoventaSegundos);

  useEffect(() => {
    if (segundos > 0) {
      setInterval(restaSegundos, 1000);
    } if  (segundos === 0) {
        // setSegundos(0)
        clearInterval(segundos);
    }
  }, [segundos]);

  function restaSegundos() {
    setSegundos(segundos - 1);
  }

  return (
    // <div className="Counter">
    <div className="countdown-container">
      <div className="seconds">
        {/* <h2 className={losing ? "danger" : "ok"}> */}
        <h2>{segundos}</h2>
        <p>Segundos</p>
        <button onClick={restaSegundos}>Comenzar</button>
      </div>
    </div>
    // </div>
  );
}

export default NewCounter;
