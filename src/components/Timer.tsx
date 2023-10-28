import { useTimer } from "react-timer-hook";
import { useState, useEffect } from "react";

interface TimerProps {
  expiryTimestamp: Date;
}

export default function Timer({ expiryTimestamp }: TimerProps) {
  const [isBreakActive, setIsBreakActive] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => {
        setIsBreakActive(true);
        startBreakTimer();
        console.warn("onExpire called");
      },
      autoStart: false,
    });

  const {
    seconds: breakSeconds,
    minutes: breakMinutes,
    start: startBreakTimer,
    reset: resetBreakTimer,
  } = useTimer({
    expiryTimestamp: new Date().getTime() + 1000 * 60 * 5, // Set the break timer duration to 10 minutes
    autoStart: false, // Do not start the break timer immediately
    onExpire: () => {
      setIsBreakActive(false);
      resetBreakTimer();
      resetMainTimer(); // Reset the main timer after the break
    },
  });

  useEffect(() => {
    if (isBreakActive) {
      startBreakTimer();
    }
  }, [isBreakActive, startBreakTimer]);

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

  const resetMainTimer = () => {
    restart(new Date().getTime() + 1000 * 60 * 25);
  };

  const handleReset = () => {
    resetMainTimer();
    setIsBreakActive(false);
    startBreakTimer();
  };

  return (
    <div style={{ textAlign: "center" }}>
      {isBreakActive && (
        <p className="break">
          On Break <strong>{`${breakMinutes}:${breakSeconds}`}</strong> minutes
        </p>
      )}
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
      <button className="pomodoro-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
