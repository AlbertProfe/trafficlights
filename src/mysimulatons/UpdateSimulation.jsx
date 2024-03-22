import { SimulationsContext } from "../middleware/DataSimulations";
import { useContext, useState } from "react";

// Sub-component for updating simulation
const UpdateSimulation = ({ simulationId, setIsEditSimulation }) => {
  const { updateSimulation, simulations } = useContext(SimulationsContext);

  const simulationToEdit = simulations.find(
    (simulation) => simulation.id === simulationId
  );

  const [editingSimulationData, setEditingSimulationData] =
    useState(simulationToEdit);

  console.log("update, simulationId:", simulationId);
  console.log("update, editingSimulationData:", editingSimulationData);

  const handleUpdate = () => {
    updateSimulation(editingSimulationData);
    setEditingSimulationData({
      user: "",
      createdAt: new Date().toString(),
      time: "",
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingSimulationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="simulation">
        <div>
          <label>User</label>
          <br />
          <input
            className="simulationInput"
            type="text"
            name="user"
            value={editingSimulationData.user}
            onChange={handleEditChange}
          />
        </div>
        <div>
          <label>Time</label>
          <br />
          <input
            className="simulationInput"
            type="text"
            name="time"
            value={editingSimulationData.time}
            onChange={handleEditChange}
          />
        </div>
        <button
          style={{
            backgroundColor: "#f44336",
          }}
          className="crudButton"
          onClick={handleUpdate}
        >
          Save
        </button>
        <button
          style={{
            backgroundColor: "black",
          }}
          className="crudButton"
          onClick={() => setIsEditSimulation(false)}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default UpdateSimulation;