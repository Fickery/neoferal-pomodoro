import { useState } from "react";
import Timer from "./Timer";

interface PomodoroProps {
  onUpdateTask: (task: string) => void;
  activeTask: string;
  activeTaskId: string;
  score: number;
}

export default function Pomodoro({
  activeTaskId,
  onUpdateTask,
  activeTask,
  score,
}: PomodoroProps) {
  const [startTimer, setStartTimer] = useState(false);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1500);

  const onEditField = (key: string, value: string) => {
    onUpdateTask({
      ...activeTask,
      [key]: value,
    });
  };

  const handleAdd = () => {
    onUpdateTask({
      ...activeTask,
      score: score + 1,
    });
  };

  const handleMinus = () => {
    onUpdateTask({
      ...activeTask,
      score: score - 1,
    });
  };

  const handleStartClick = () => {
    setStartTimer(true);
  };

  const handleTimerStart = () => {
    setStartTimer(true);
  };

  if (!activeTask) {
    return <div className="no-active-task">No Task selected</div>;
  }
  return (
    <div className="right-cont">
      <div className="right-title-top">
        <div className="right-pomodoros-score">
          <p className="font-black">Pomodoros</p>
          <div className="score-btn">
            <button className="right-score-btn" id="add" onClick={handleAdd}>
              +
            </button>
            <button className="right-score-btn" id="score">
              1/{score}
            </button>
            <button
              className="right-score-btn"
              id="minus"
              onClick={handleMinus}
            >
              -
            </button>
          </div>
        </div>
        <div className="loading-bar">
          <div className="the-loading-bar"></div>
          <input
            className="task-title-input"
            type="text"
            id="title"
            placeholder="New Task"
            value={activeTask.title}
            onChange={(e) => onEditField("title", e.target.value)}
            autoFocus
          />
        </div>
      </div>
      <div className="main-content">
        <p className="break">On Break - 5:00 minutes</p>
        {activeTask && (
          <Timer
            key={activeTask.id} // Add a unique key for each timer
            expiryTimestamp={activeTask.expiryTimestamp}
            onUpdateTask={onUpdateTask}
            activeTaskId={activeTaskId}
          />
        )}
      </div>
    </div>
  );
}
