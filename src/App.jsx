import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(100);
  const [walking, setWalking] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [light, setLight] = useState(false);

  /*
  useEffect(() => {
    console.log("pending effect:", pending);
  }, [pending]);
  */

  function handleTrafficLightClick() {
    //console.log("before", pending);
    setPending((p) => p - 10);
    //console.log("after", pending);
    setWalking((w) => w + 10);
    setLight(true); // Set light to green when walking starts
    setTimeout(() => {
      setWalking((w) => w - 10);
      setCompleted((c) => c + 10);
      setLight(false); // Set light to red when walking is completed
    }, 5000); // Delay for 3000 milliseconds (5 seconds)
  }

  return (
    <>
      <h3 style={{ color: light ? "grey" : "white" }}> Pending: {pending} </h3>
      <h3 style={{ color: light ? "white" : "grey" }}>
        Walking: {walking} {light ? " . . . . ." : ""}
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

