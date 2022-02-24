import React, { useState, useEffect } from "react";
// import PlayButton from "../Buttons/PlayButton";

import './player.css'

const useAudio = () => {
  const [audio] = useState(new Audio("/never.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <button className="playButton" onClick={toggle}>
      {playing ? "Pause" : "Play"}
    </button>
  );
};

export default Player;
