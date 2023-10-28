import { useTimer } from "react-timer-hook";

export default function BreakTimer({ expiryTimestamp }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "16px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}
