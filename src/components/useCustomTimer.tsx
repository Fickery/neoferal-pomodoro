import { useState } from "react";
import { useTimer } from "react-timer-hook";

export const useCustomTimer = (expiryTimestamp) => {
  const [timerStarted, setTimerStarted] = useState(false);

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
      autoStart: false, // Disable autoStart
    });

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

  const handleReset = () => {
    setTimerStarted(false);
    restart(expiryTimestamp);
  };

  return {
    seconds,
    minutes,
    isRunning,
    timerStarted,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  };
};
