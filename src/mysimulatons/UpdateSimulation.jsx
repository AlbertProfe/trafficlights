

// Sub-component for updating simulation
const UpdateSimulation = ({
  handleEditChange,
  handleUpdate,
  setEditingSimulationId,
  editingSimulationData,
}) => (
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
      onClick={() => setEditingSimulationId(null)}
    >
      Close
    </button>
  </div>
);

export default UpdateSimulation;