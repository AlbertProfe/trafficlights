import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(100);
  const [walking, setWalking] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [light, setLight] = useState(false);

  function handleTrafficLightClick() {
    setPending((p) => p - 10);
    setWalking((w) => w + 10);
    setLight((l) => !l);
    delaySyncTime(3000) // Delay for 3000 milliseconds (3 seconds)
      .then(() => {
        setWalking((w) => w - 10);
        setCompleted((c) => c + 10);
        setLight((l) => !l);
      });
  }

  return (
    <>
      <h3 style={{ color: light ? "grey" : "white" }}> Pending: {pending} </h3>
      <h3 style={{ color: light ? "white" : "grey" }}>
        Walking: {walking} {light ? " . . ." : ""}
      </h3>
      <h3 style={{ color: light ? "green" : "grey" }}>
        Completed: {completed}
      </h3>
      <button
        onClick={handleTrafficLightClick}
        style={{
          backgroundColor: light ? "green" : "red",
          padding: "10px 24px",
          borderRadius: "8px",
          border: "none",
          color: "white",
          fontSize: "20px",
        }}
      >
        Taffic Light
      </button>
    </>
  );
}

function delaySyncTime(timeInMilliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInMilliseconds);
  });
}
