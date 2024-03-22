import EditSimulation from "./EditSimulation";
import DeleteSimulation from "./DeleteSimulation";
import { useContext } from "react";
import { SimulationsContext } from "../middleware/DataSimulations";


// Sub-component for listing simulations
const ListSimulations = () => {

  const {simulations,isLoading} = useContext(SimulationsContext);



return (
  <>
    <h2 style={{ textAlign: "center" }}>
      Simulations list ({simulations.length})
    </h2>
    <ul style={{ listStyleType: "none" }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        simulations.map((simulation) => (
          <div className="simulation" key={simulation.key}>
            <li>
              <strong>User: {simulation.user} </strong> <br />
              id: {simulation.id} <br />
              Created: {simulation.createdAt} <br />
              Time: {simulation.time} <br />
                <>
                  <EditSimulation simulationId={simulation.id} />
                  <DeleteSimulation simulationId={simulation.id} />
                </>
            
              <br />
            </li>
          </div>
        ))
      )}
    </ul>
  </>
);

              };
export default ListSimulations;

