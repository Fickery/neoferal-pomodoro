export default function Pomodoro() {
  return (
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
        {/* <p className="break">On Break - 5:00 minutes</p> */}
        <p className="font-black-big">25:00</p>
        <div className="button-top">
          <button className="pomodoro-btn">Start</button>
          <button className="pomodoro-btn" disabled>
            Pause
          </button>
        </div>
        <button className="pomodoro-btn reset-btn">Reset</button>
      </div>
    </div>
  );
}
