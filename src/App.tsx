import { useEffect, useState } from "react";
import Pomodoro from "./components/Pomodoro";
import Sidebar from "./components/Sidebar";
import { nanoid } from "nanoid";
import "./App.scss";

const newTask = () => {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1500);
  return {
    id: nanoid(),
    title: "",
    score: 10,
    expiryTimestamp,
    timerRunning: false,
  };
};

export default function App() {
  const [tasks, setTasks] = useState(() =>
    JSON.parse(localStorage.getItem("tasks") || "[]"),
  );
  const [activeTask, setActiveTask] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState<string>(tasks[0]?.id || "");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onAddTask = () => {
    setTasks([newTask(), ...tasks]);
  };

  const getActiveTasks = () => {
    return tasks.find((task: { id: boolean }) => task.id === activeTask);
  };

  const onUpdateTask = (updatedTask: any) => {
    const updatedTaskArray = tasks.map((task: { id: boolean }) => {
      if (task.id === activeTask) {
        return updatedTask;
      }
      return task;
    });

    setTasks(updatedTaskArray);
  };

  function deleteTask(
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    id: string,
  ) {
    event.stopPropagation();
    setTasks((prevTasks: any[]) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="pomo-cont">
      <Sidebar
        tasks={tasks}
        setTasks={setTasks}
        activeTask={activeTask}
        setActiveTask={setActiveTask}
        newTask={onAddTask}
        deleteTask={deleteTask}
        activeTasks={{ id: activeTaskId }}
      />
      <Pomodoro
        activeTask={getActiveTasks()}
        activeTaskId={activeTaskId}
        onUpdateTask={onUpdateTask}
        score={getActiveTasks()?.score || 10}
      />
    </div>
  );
}
