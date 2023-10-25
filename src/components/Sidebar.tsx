import { useState } from "react";

interface SidebarProps {
  tasks: {
    id: number;
    name: string;
  }[];
  setTasks: (tasks: { id: number; name: string }[]) => void;
  activeTask: {
    id: number;
  };
  setActiveTask: (id: number) => void;
  setActiveTaskId: (id: number) => void;
  deleteTask: (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    id: number,
  ) => void;
  newTask: () => void;
  filteredNotes: {
    id: number;
    name: string;
  }[];
  setFilteredNotes: (tasks: { id: number; name: string }[]) => void;
  LastModified: number;
}

// const Sidebar = ({
//   tasks,
//   setTasks,
//   activeTask,
//   setActiveTask,
//   newTask,
//   deleteTask,
//   setActiveTask,
// }) => {

export default function Sidebar(props: SidebarProps) {
  console.log(props.tasks);
  const sortedTask = props.tasks.sort(
    (a, b) => b.lastModified - a.lastModified,
  );
  const [input, setInput] = useState("");
  const getInput = (text) => {
    setInput(text);
    props.setFilteredNotes((prev) => {
      if (!text) {
        return props.tasks;
      }
      return props.tasks.filter((task) =>
        task.title.toLowerCase().includes(text.toLowerCase()),
      );
    });
  };

  const currentActiveTask = input ? props.filteredNotes : props.tasks;

  const tasksElement = props.tasks.map((task, index) => (
    <li
      key={task.id}
      className={`app-sidebar-note ${task.id === props.activeTask && "active"}`}
      onClick={() => props.setActiveTask(task.id)}
    >
      <div className="task-box">
        <p className="task-name">{task.title}</p>
        <p
          className="del-btn"
          onClick={(event) => props.deleteTask(event, task.id)}
        >
          DEL
        </p>
      </div>
    </li>
  ));

  return (
    <div className="left-cont">
      <div className="left-title-top">
        <div className="left-title">
          <p className="font-black">TASK</p>
          <button className="create-btn" onClick={props.newTask}>
            +
          </button>
        </div>
      </div>
      <div className="task-content">
        <ul className="task-content-box">{tasksElement}</ul>
      </div>
    </div>
  );
}
