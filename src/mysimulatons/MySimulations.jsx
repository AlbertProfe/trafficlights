import { useContext, useState } from "react";
import { SimulationsContext } from "../middleware/DataSimulations";
import ListSimulations from "./ListSimulation"
import CreateSimulation from "./CreateSimulation"



const MySimulations = () => {
  const {
    simulations,
    isLoading,
    deleteSimulation,
    addSimulation,
    updateSimulation,
  } = useContext(SimulationsContext);

  const [newSimulationData, setNewSimulationData] = useState({
    user: "",
    createdAt: new Date().toString(),
    time: "",
  });
  const [editingSimulationId, setEditingSimulationId] = useState(null);
  const [editingSimulationData, setEditingSimulationData] = useState({
    user: "",
    createdAt: new Date().toString(),
    time: 0,
  });

  const handleCreate = () => {
    addSimulation(newSimulationData);
    setNewSimulationData({
      user: "",
      createdAt: new Date().toString(),
      time: "",
    });
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewSimulationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    updateSimulation(editingSimulationData);
    setEditingSimulationId(null);
    setEditingSimulationData({
      user: "",
      createdAt: new Date().toString(),
      time: "",
    });
  };

  const handleEditSelectId = (id) => {
    const simulationToEdit = simulations.find(
      (simulation) => simulation.id === id
    );
    setEditingSimulationId(id);
    setEditingSimulationData(simulationToEdit);
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
      <br />
      <h1 style={{ textAlign: "center" }}>Simulations</h1>
      <hr />
      <CreateSimulation
        newSimulationData={newSimulationData}
        handleAddChange={handleAddChange}
        handleCreate={handleCreate}
      />
      <br />
      <hr />
      <ListSimulations
        simulations={simulations}
        isLoading={isLoading}
        handleEditSelectId={handleEditSelectId}
        deleteSimulation={deleteSimulation}
        handleEditChange={handleEditChange}
        handleUpdate={handleUpdate}
        setEditingSimulationId={setEditingSimulationId}
        editingSimulationId={editingSimulationId}
        editingSimulationData={editingSimulationData}
      />
    </>
  );
};

export default MySimulations;
