import  { useState } from "react";

// Generate a random integer within the specified range,
//inclusive of both minimum and maximum values.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns a random color from a predefined array of colors.
function getRandomColor() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  return colors[getRandomInt(0, colors.length - 1)];
}

export default function TrafficLightSimulation() {
  const [pending, setPending] = useState(getRandomInt(8, 15));
  const [walking, setWalking] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [light, setLight] = useState(false);

  // setInterval function repeatedly calls a function or executes a code snippet,
  // with a fixed time delay between each call.
  // It takes two parameters: a function to be executed and
  // the interval (in milliseconds) on how frequently the function should be called.

  // clearInterval function stops the repeated execution
  // of the function specified by setInterval.
  // It takes the interval ID returned by setInterval as its parameter.
  // When clearInterval is called with the interval ID, it clears the interval,
  // preventing further executions of the specified function.
  function handleTrafficLightClick() {
    setLight(true); // Turn on the traffic light

    let walked = 0; // Initialize walked variable to count persons walking

    const walkingInterval = setInterval(() => {
      // Check if there are pending steps and
      //if the maximum steps limit hasn't been reached
      if (pending > 0 && walked < 6) {
        // Increment/decrement  the walking, pending and walked variables
        setWalking((w) => w + 1);
        setPending((p) => p - 1);
        walked++;
      } else {
        clearInterval(walkingInterval); // Stop the walking interval
        setCompleted((c) => c + walked); // Add the walked count to the total completed
        setWalking(0); // Reset the walking count
        setLight(false); // Turn off the traffic light
      }
    }, 1000); // Adjust the delay as needed (1 second interval)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Traffic Light Crossing Simulation</h1>
      <p>Help pedestrians cross the street safely!</p>
      <button
        onClick={handleTrafficLightClick}
        style={{
          backgroundColor: light ? "green" : "red",
          padding: "10px 24px",
          borderRadius: "8px",
          border: "none",
          color: "white",
          fontSize: "20px",
          marginBottom: "20px",
        }}
      >
        Traffic Light
      </button>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>Pending: {pending}</h3>
          {Array.from({ length: pending }).map((_, index) => (
            <div
              key={index}
              style={{
                backgroundColor: getRandomColor(),
                width: "10px",
                height: "10px",
                margin: "2px",
              }}
            />
          ))}
        </div>
        <div>
          <h3>Walking: {walking}</h3>
          {Array.from({ length: walking }).map((_, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "blue",
                width: "10px",
                height: "10px",
                margin: "2px",
              }}
            />
          ))}
        </div>
        <div>
          <h3>Completed: {completed}</h3>
          {Array.from({ length: completed }).map((_, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "green",
                width: "10px",
                height: "10px",
                margin: "2px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
