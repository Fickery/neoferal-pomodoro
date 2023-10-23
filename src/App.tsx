import "./App.scss";
import Pomodoro from "./components/Pomodoro";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="pomo-cont">
      <Sidebar />
      <Pomodoro />
    </div>
  );
}
