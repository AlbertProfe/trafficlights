import { useState } from "react";

export default function RequestTracker() {
  const [crossing, setCrossing] = useState({
    pending: 100,
    walking: 0,
    completed: 0,
    light: false,
  });

  function handleTrafficLightClick() {
    setCrossing((prevState) => ({
      ...prevState,
      pending: prevState.pending - 10,
      walking: prevState.walking + 10,
      light: true,
    }));

    setTimeout(() => {
      setCrossing((prevState) => ({
        ...prevState,
        walking: prevState.walking - 10,
        completed: prevState.completed + 10,
        light: false,
      }));
    }, 5000);
  }

  const { pending, walking, completed, light } = crossing;

  return (
    <>
      <h3 style={{ color: light ? "grey" : "white" }}> Pending: {pending} </h3>
      <h3 style={{ color: light ? "white" : "red" }}>
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
        Traffic Light
      </button>
    </>
  );
}
