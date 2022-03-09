import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [finalTime, setFinalTime] = useState(false);

  var targetNow = new Date();
  targetNow = new Date(targetNow.getTime() + 91000);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const diference = targetNow - now.getTime();
      const min = Math.floor((diference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(min);
      const sec = Math.floor((diference % (1000 * 60)) / 1000);
      setSeconds(sec);

      if (min <= 0 && sec <= 0) {
        setFinalTime(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-wrapper">
      {finalTime ? (
        <h1>Time is Up</h1>
      ) : (
        <h2>
          Time Left: {minutes}m:
          {seconds}s
        </h2>
      )}
    </div>
  );
};

export default CountDown;
