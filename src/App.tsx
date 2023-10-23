import "./App.scss";

export default function App() {
  return (
    <>
      <div className="pomo-cont">
        <div className="left-cont">
          <div className="left-title-top">
            <div className="left-title">
              <p className="font-black">TASK</p>
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
              <div className="task-box-create">
                <p className="task-name">+ Create</p>
              </div>
            </ul>
          </div>
        </div>

        <div className="right-cont">
          <div className="right-title-top">
            <ul>
              <li>
                <p className="font-black">Rounds</p>
                <p>1/4</p>
              </li>
              <li>
                <p className="font-black">Pomodoros</p>
                <p>1/12</p>
              </li>
            </ul>
            <div className="loading-bar">
              <div className="the-loading-bar"></div>
            </div>
          </div>
          <div className="main-content">
            <p className="font-black-big">25:00</p>
            <div className="button-top">
              <button>Start</button>
              <button disabled>Pause</button>
            </div>
            <button className="reset-btn">Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}
