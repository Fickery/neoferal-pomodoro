import { useEffect, useState } from "react";
import "./App.scss";
import Pomodoro from "./components/Pomodoro";
import Sidebar from "./components/Sidebar";
import { nanoid } from "nanoid";
import { Task } from "./types";

const newTask = () => {
  return { id: nanoid(), title: "", lastModified: Date.now() };
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() =>
    JSON.parse(localStorage.getItem("tasks") || "[]"),
  );
  const [activeTaskId, setActiveTaskId] = useState<string>(tasks[0]?.id || "");
  const [activeTask, setActiveTask] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);

  const onAddTask = () => {
    setTasks([newTask(), ...tasks]);
  };

  const getActiveTasks = () => {
    return tasks.find((task) => task.id === activeTask);
  };

  const onUpdateTask = (updatedTask: string) => {
    const updatedTaskArray = tasks.map((task) => {
      if (task.id === activeTask) {
        return updatedTask;
      }
      return task;
    });

    setTasks(updatedTaskArray);
  };

  // function createNewTask() {
  //   const newTask: Task = {
  //     id: nanoid(),
  //     name: "New Task",
  //   };
  //   setTasks((prevTasks: Task[]) => [...prevTasks, newTask]);
  //   setActiveTaskId(newTask.id);
  // }

  function deleteTask(
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    id: string,
  ) {
    event.stopPropagation();
    setTasks((prevTasks: Task[]) =>
      prevTasks.filter((task: Task) => task.id !== id),
    );
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="pomo-cont">
      <div>
        <Sidebar
          tasks={tasks}
          setTasks={setTasks}
          activeTask={activeTask}
          setActiveTask={setActiveTask}
          newTask={onAddTask}
          deleteTask={deleteTask}
          activeTasks={{ id: activeTaskId }}
          filteredNotes={filteredNotes}
          setFilteredNotes={setFilteredNotes}
        />
      </div>
      <Pomodoro
        activeTask={getActiveTasks()}
        activeTaskId={activeTaskId}
        onUpdateTask={onUpdateTask}
      />
    </div>
  );
}
