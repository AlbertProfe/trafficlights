

// Sub-component for actions like delete/save button
const ActionSimulation = ({
  simulationId,
  deleteSimulation,
  handleEditSelectId,
}) => (
  <>
    <button
      className="crudButton"
      style={{ backgroundColor: "black" }}
      onClick={() => deleteSimulation(simulationId)}
    >
      Delete
    </button>
    <button
      className="crudButton"
      style={{ backgroundColor: "#8A9A5B" }}
      onClick={() => handleEditSelectId(simulationId)}
    >
      Edit
    </button>
  </>
);

export default ActionSimulation;