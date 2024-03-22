import PropTypes from "prop-types";
import { SimulationsContext } from "../middleware/DataSimulations";
import { useContext } from "react";

// Sub-component for actions like delete/save button
const DeleteSimulation = ({ simulationId }) => {
  const { deleteSimulation } = useContext(SimulationsContext);
  console.log("delete, simulationId:", simulationId);
  return (
    <>
      <button
        className="crudButton"
        style={{ backgroundColor: "black" }}
        onClick={() => deleteSimulation(simulationId)}
      >
        Delete
      </button>
    </>
  );
};

DeleteSimulation.propTypes = {
  simulationId: PropTypes.string.isRequired, // Adjust the type if simulationId is not a string
};

export default DeleteSimulation;
