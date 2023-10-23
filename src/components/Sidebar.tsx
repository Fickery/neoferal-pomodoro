export default function Sidebar() {
  return (
    <div className="left-cont">
      <div className="left-title-top">
        <div className="left-title">
          <p className="font-black">TASK</p>
          <button className="create-btn">+</button>
        </div>
      </div>
      <div className="task-content">
        <ul className="task-content-box">
          <li>
            <div className="task-box">
              <p className="task-name">Work</p>
              <p className="del-btn">DEL</p>
            </div>
          </li>
          <li>
            <div className="task-box">
              <p className="task-name">Study</p>
              <p className="del-btn">DEL</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
