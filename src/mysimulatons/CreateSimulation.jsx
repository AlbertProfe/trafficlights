

const CreateSimulation = ({
  newSimulationData,
  handleAddChange,
  handleCreate,
}) => (
  <>
    <h2 style={{ textAlign: "center" }}>Add Simulation</h2>
    <div className="simulation">
      <div className="input-group">
        <label>User</label>
        <input
          className="simulationInput"
          type="text"
          name="user"
          value={newSimulationData.user}
          onChange={handleAddChange}
        />
      </div>
      <div className="input-group">
        <label>Time</label>
        <input
          className="simulationInput"
          type="text"
          name="time"
          value={newSimulationData.time}
          onChange={handleAddChange}
        />
      </div>
      <button
        className="crudButton"
        style={{
          backgroundColor: "#f44336",
        }}
        onClick={handleCreate}
      >
        Create
      </button>
    </div>
  </>
);

export default CreateSimulation;
