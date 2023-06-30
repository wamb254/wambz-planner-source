import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTimeElapsed(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const milliseconds = (`00${time % 1000}`).slice(-3);
    const seconds = (`0${Math.floor((time / 1000) % 60)}`).slice(-2);
    const minutes = (`0${Math.floor((time / 1000 / 60) % 60)}`).slice(-2);

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <span>Minutes:</span>
        <span>{formatTime(timeElapsed).split(':')[0]}</span>
      </div>
      <div>
        <span>Seconds:</span>
        <span>{formatTime(timeElapsed).split(':')[1]}</span>
      </div>
      <div>
        <span>Milliseconds:</span>
        <span>{formatTime(timeElapsed).split(':')[2]}</span>
      </div>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
