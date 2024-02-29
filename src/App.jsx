import { useState, useMemo } from "react";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  return colors[getRandomInt(0, colors.length - 1)];
}

function refreshPage() {
  window.location.reload(false);
}

export default function TrafficLightSimulation() {
  const initPeopleToWalk = useMemo(() => getRandomInt(10, 20), []); // Initialize peopleToWalk with a random value that remains constant

  const peopleToWalk = useMemo(() => initPeopleToWalk, []); // peopleToWalk does not change along all the execution
  const initGroupWalking = getRandomInt(2, 6);

  const [crossing, setCrossing] = useState({
    pending: peopleToWalk,
    walking: 0,
    completed: 0,
    groupWalking: initGroupWalking,
    light: false,
  });

  function handleTrafficLightClick() {
    setCrossing((prevState) => ({
      ...prevState,
      light: true,
    }));

    let walked = 0;
    let maxToWalk = 0;
    const walkingInterval = setInterval(() => {
      const { pending, groupWalking } = crossing;
      if (groupWalking >= pending) maxToWalk = pending;
      else maxToWalk = groupWalking;

      if (walked < maxToWalk) {
        setCrossing((prevState) => ({
          ...prevState,
          walking: prevState.walking + 1,
          pending: prevState.pending - 1,
        }));
        walked++;
      } else {
        clearInterval(walkingInterval);
        setCrossing((prevState) => ({
          ...prevState,
          completed: prevState.completed + walked,
          walking: 0,
          light: false,
          groupWalking: initGroupWalking,
        }));
      }
    }, 1000);
  }

  const { pending, walking, completed, groupWalking, light } = crossing;

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Traffic Light Crossing Simulation</h1>
        <h4>Help pedestrians cross the street safely!</h4>{" "}
        <div className="chip">
         {peopleToWalk} people want to cross the pedestrian/zebra crossing
         </div><p></p>
        {completed === peopleToWalk ? (
          <button
            onClick={refreshPage}
            style={{
              backgroundColor: "black",
              padding: "10px 24px",
              borderRadius: "8px",
              border: "none",
              color: "white",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            Play Again (refresh page)
          </button>
        ) : (
          <>
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

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <h3>Group walking: {groupWalking} </h3>
              {Array.from({ length: groupWalking }).map((_, index) => (
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
          </>
        )}
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
    </>
  );
}
