import React, { useState } from "react";

function App() {
  let audio = new Audio("/never.mp3");
  const [showAudio, setShowAudio] = useState (false)

  const start = () => {
    audio.play();
    setShowAudio(true)
  };

  
  const stop = () => {
    audio.pause();
  };

  return (
    <div>
        {showAudio ? <button onClick={stop}>Stop</button>  : <button onClick={start}>Play</button>}
    
    </div>
  );
}

export default App;
