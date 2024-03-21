import UpdateSimulation from "./UpdateSimulation"
import ActionSimulation from "./ActionsSimulation";

// Sub-component for listing simulations
const ListSimulations = ({
  simulations,
  isLoading,
  handleEditSelectId,
  deleteSimulation,
  handleEditChange,
  handleUpdate,
  setEditingSimulationId,
  editingSimulationId,
  editingSimulationData,
}) => (
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
              {editingSimulationId === simulation.id ? (
                <UpdateSimulation
                  simulation={simulation}
                  handleEditChange={handleEditChange}
                  handleUpdate={handleUpdate}
                  setEditingSimulationId={setEditingSimulationId}
                  editingSimulationData={editingSimulationData}
                />
              ) : (
                <>
                  <ActionSimulation
                    simulationId={simulation.id}
                    deleteSimulation={deleteSimulation}
                    handleEditSelectId={handleEditSelectId}
                  />
                </>
              )}
              <br />
            </li>
          </div>
        ))
      )}
    </ul>
  </>
);


export default ListSimulations;

