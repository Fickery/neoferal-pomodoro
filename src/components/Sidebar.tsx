interface SidebarProps {
  tasks: {
    id: number;
    title: string;
    score: number;
  }[];
  setTasks: (tasks: { id: number; name: string }[]) => void;
  activeTask: {
    id: number;
    title: string;
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

export default function Sidebar(props: SidebarProps) {
  // console.log(props.tasks);
  const tasksElement = props.tasks.map((task) => (
    <li
      key={task.id}
      className={`app-sidebar-note ${
        task.id === props.activeTask.id && "active"
      }`}
      onClick={() => props.setActiveTask(task.id)}
    >
      <div className="task-box">
        <p className="task-name">
          {task.title !== "" ? (
            <p className="task-name">{task.title}</p>
          ) : (
            <p className="task-name">New Task</p>
          )}
        </p>
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
