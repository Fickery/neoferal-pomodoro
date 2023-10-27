import { useTimer } from "react-timer-hook";
import { useState, useEffect } from "react";

interface TimerProps {
  expiryTimestamp: Date;
}

export default function Timer({ expiryTimestamp }: TimerProps) {
  const [resetClicked, setResetClicked] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
      autoStart: false,
    });

  useEffect(() => {
    if (resetClicked) {
      pause();
      setResetClicked(false);
    }
  }, [resetClicked, pause]);

  const handleStart = () => {
    setTimerStarted(true);
    start();
  };

  const handlePause = () => {
    pause();
  };

  const handleResume = () => {
    resume();
  };

  const handleResetClick = () => {
    setResetClicked(true);
    const time = new Date();
    time.setSeconds(time.getSeconds() + 1500);
    restart(time);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="font-black-big">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p className="font-running">{isRunning ? "Running" : "Not running"}</p>
      <button
        className="pomodoro-btn"
        onClick={handleStart}
        disabled={timerStarted}
      >
        Start
      </button>
      <button className="pomodoro-btn" onClick={handlePause}>
        Pause
      </button>
      <button className="pomodoro-btn" onClick={handleResume}>
        Resume
      </button>
      <button className="pomodoro-btn" onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
}
