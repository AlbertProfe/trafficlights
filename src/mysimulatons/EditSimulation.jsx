//import { SimulationsContext } from "../middleware/DataSimulations";
import {useState } from "react";
import UpdateSimulation from "./UpdateSimulation"

// Sub-component for actions like delete/save button
const EditSimulation = ({simulationId}) => {

  //const {simulations} = useContext(SimulationsContext);
  const [isEditSimulation, setIsEditSimulation] = useState(false);
  console.log("edit, simulationId:", simulationId);
  

  return (
    <>
      <button
        className="crudButton"
        style={{ backgroundColor: "#8A9A5B" }}
        onClick={() => setIsEditSimulation(true)}
      >
        Edit
      </button>
      <br />
      {isEditSimulation && (
        <UpdateSimulation
          simulationId={simulationId}
          setIsEditSimulation={setIsEditSimulation}
        />
      )}
    </>
  );
};

export default EditSimulation;
